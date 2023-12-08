import { useContext, useEffect, useState } from 'react';
import BlogContext from '../contexts/BlogContext';
import { Link } from 'react-router-dom';

function MoreArticles() {
  const { posts, activePost, setActivePost, getPostByID } =
    useContext(BlogContext);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    setOtherPosts(posts.filter((post) => post._id !== activePost.post._id));
  }, [posts, activePost]);

  return (
    <div className="col-start-4 px-2 flex flex-col gap-6 pt-4">
      {otherPosts.map((post) => (
        <div key={post._id}>
          <img
            src={
              post.thumbnail ||
              'https://www.achieversit.com/management/uploads/course_image/react-img21.png'
            }
            alt=""
          />
          <Link onClick={() => getPostByID(post._id)} to={`/post/${post._id}`}>
            <h2 className="text-2xl font-bold pb-2 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500 pb-2">
            {post.content.slice(0, 120) + '...'}
          </p>
          <div className="flex">
            <p className="text-l text-gray-400">
              by: {post.author + ' ' + '•'}
            </p>
            {post.createdAt && (
              <p className="text-l text-gray-400">
                {new Date(post.createdAt).toDateString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoreArticles;
