/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BlogContext from '../contexts/BlogContext';
import Footer from './Footer';
import ContactBox from './ContactBox';
import MoreArticles from './MoreArticles';
import ReactMarkdown from 'react-markdown';
import SharePostBtn from './SharePostBtn';

function FullBlogPost({ setShowSearch }) {
  const { activePost, getPostByID } = useContext(BlogContext);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (id) {
      getPostByID(id);
      setShowSearch(false);
    }
    console.log(pathname);
  }, [pathname]);

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
        <div className="px-2 col-span-3 w-full ">
          <div className="relative">
            <img
              src={activePost.post.thumbnail}
              className=" w-full mx-auto mbß-6 "
              alt=""
            />
            <SharePostBtn
              activePost={activePost}
              classes={'absolute top-0 right-0'}
            />
          </div>

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

export default FullBlogPost;
