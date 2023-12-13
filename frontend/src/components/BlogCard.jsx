/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogContext from '../contexts/BlogContext';

function BlogCard({ includeDeleteFeatures, searchValue }) {
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
    return <div>Loading...</div>;
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
        className="rounded w-full shadow-lg shadow-gray-500"
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
            <p className="text-l text-gray-400">
              by: {post.author + ' ' + '• '}
            </p>
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
