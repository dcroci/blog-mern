/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogContext from '../contexts/BlogContext';
import Footer from './Footer';
import ContactBox from './ContactBox';
import MoreArticles from './MoreArticles';
import ReactMarkdown from 'react-markdown';

function FullBlogPost() {
  const { activePost, getPostByID } = useContext(BlogContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostByID(id);
    }
  }, []);

  //potential bug ^^^

  return activePost && activePost.post ? (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto max-w-[1280px]">
        <div className="col-span-full w-full pt-4 mx-auto flex flex-col">
          <h2 className="text-4xl font-bold mx-auto pt-4 text-center">
            {activePost.post.title}
          </h2>
          <p className=" text-gray-500 py-2 pb-4 mx-auto ">
            by: {activePost.post.author}
          </p>
        </div>
        <div className="px-2 col-span-3 w-full">
          <img
            src={
              activePost.post.thumbnail ||
              'https://www.achieversit.com/management/uploads/course_image/react-img21.png'
            }
            className=" w-full mx-auto my-6 "
            alt=""
          />

          <p className="text-xl p-2 mx-auto leading-9">
            <ReactMarkdown>{activePost.post.content}</ReactMarkdown>
          </p>
        </div>
        <aside>
          <ContactBox />
          <MoreArticles />
        </aside>
      </div>
      <Footer />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default FullBlogPost;
