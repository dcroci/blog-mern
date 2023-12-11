/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await fetch(
          'https://dom-blog-67c0fda80c7d.herokuapp.com/api/posts'
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setPosts(json.data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    getAllPosts();
  }, []);

  // Define getPostByID outside of useEffect
  const getPostByID = async (id) => {
    try {
      const res = await axios.get(
        `https://dom-blog-67c0fda80c7d.herokuapp.com/api/posts/${id}`
      );
      setActivePost(res.data.data);
    } catch (error) {
      console.error('Error fetching post:', error.message);
    }
  };
  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        activePost,
        getPostByID,
        addNewPost,
        setPosts,
        setActivePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
