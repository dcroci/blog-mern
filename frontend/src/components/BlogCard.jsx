/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogContext from '../contexts/BlogContext';

function BlogCard({ includeDeleteFeatures, searchValue, sortFilter }) {
  const { posts, setPosts } = useContext(BlogContext);

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://dom-blog-67c0fda80c7d.herokuapp.com/api/posts/${postId}`
      );
      const updatedPosts = posts.filter((post) => post._id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!posts || posts.length === 0) {
    return (
      <div role="status w-full flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-full h-8 text-gray-200 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#4fadeb"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#4fadeb"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const filteredPosts = searchValue
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : posts;

  const renderPosts = (post) => (
    <div
      className="flex flex-col gap-6 mx-auto w-full grid-item relative"
      key={post._id}
    >
      <img
        src={
          post.thumbnail ||
          'https://www.achieversit.com/management/uploads/course_image/react-img21.png'
        }
        className="rounded w-full max-h-72 shadow-lg shadow-gray-500"
        alt="Post Thumbnail"
      />
      <div className="flex flex-col content-between h-full ">
        <div>
          <Link to={`/post/${post._id}`}>
            <h2 className="text-2xl font-bold pb-2 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500 pb-2">
            {post.content ? post.content.slice(0, 120) + '...' : ''}
          </p>
          <div className="flex">
            <p className="text-l text-gray-400">{post.author + ' • ' + ' '}</p>
            {post.createdAt && (
              <p className="text-l text-gray-400">
                {new Date(post.createdAt).toDateString()}
              </p>
            )}
          </div>

          {includeDeleteFeatures && (
            <p
              onClick={() => deletePost(post._id)}
              className="bg-red-300 absolute top-0 right-0 h-6 w-6 flex items-center justify-center rounded-full cursor-pointer"
            >
              &times;
            </p>
          )}
        </div>
        <Link to={`/post/${post._id}`}>
          <h2 className="text-xl font-bold pb-2 hover:underline bg-[#4fadeb] hover:bg-[#00a2ff] text-white w-fit px-4 py-2 rounded-full my-4 ">
            Read now
          </h2>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full py-3 grid grid-cols-1 lg:grid-cols-2 gap-7  mx-auto px-2">
      {filteredPosts.map(renderPosts)}
    </div>
  );
}

export default BlogCard;
