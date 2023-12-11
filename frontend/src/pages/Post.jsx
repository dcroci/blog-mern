/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import FullBlogPost from '../components/FullBlogPost';
import Navbar from '../components/Navbar';
import BlogContext from '../contexts/BlogContext';

function Post({ id }) {
  const { activePost, getPostByID } = useContext(BlogContext);

  useEffect(() => {
    if (id) {
      getPostByID(id);
    }
  }, [id, getPostByID]);

  useEffect(() => {
    if (activePost && activePost.post) {
      document.title = `Dom's Blog | ${activePost.post.title}`;
    }
  }, [activePost]); // Add activePost as a dependency

  return (
    <>
      <Navbar />
      <FullBlogPost />
    </>
  );
}

export default Post;
