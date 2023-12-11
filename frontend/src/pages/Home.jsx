/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import BlogContext from '../contexts/BlogContext';
import Footer from '../components/Footer';

function Home() {
  const { setActivePost, activePost } = useContext(BlogContext);
  useEffect(() => {
    setActivePost(null);
    document.title = "Dom's Blog";
  }, [activePost]);
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col gap-2 max-w-[1280px] mx-auto px-4 ">
        <h1 className="text-4xl font-bold pt-4">Blog posts</h1>
        <p className="text-gray-400 border-b-2 border-gray-500 py-2">
          Explore some of my favorite articles
        </p>
      </div>
      <div className="w-full flex  max-w-[1280px] mx-auto px-2">
        <BlogCard includeDeleteFeatures={false} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
