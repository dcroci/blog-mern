import { useContext, useEffect, useState } from 'react';
import BlogContext from '../contexts/BlogContext';
import { Link } from 'react-router-dom';

function MoreArticles() {
  const { posts, activePost, getPostByID } = useContext(BlogContext);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    setOtherPosts(posts.filter((post) => post._id !== activePost.post._id));
  }, [posts, activePost]);

  return (
    <div className="col-start-4 px-2 flex flex-col gap-6 pt-4">
      <p className="text-3xl font-bold text-center text-white bg-gray-500  p-2">
        Other Articles
      </p>
      {otherPosts.map((post) => (
        <div key={post._id} className=" mx-auto max-w-2xl">
          <img
            src={
              post.thumbnail ||
              'https://www.achieversit.com/management/uploads/course_image/react-img21.png'
            }
            alt=""
            className="w-full h-72  md:h-40"
          />
          <Link onClick={() => getPostByID(post._id)} to={`/post/${post._id}`}>
            <h2 className="text-2xl font-bold py-2 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500 pb-2">
            {post.content.slice(0, 120) + '...'}
          </p>
          <div className="flex">
            <p className="text-l text-gray-400">
              by:{' '}
              {post.author + ' • ' + new Date(post.createdAt).toDateString()}{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoreArticles;
