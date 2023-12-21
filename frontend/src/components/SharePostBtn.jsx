/* eslint-disable react/prop-types */
import {
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function SharePostBtn({ activePost, classes }) {
  const { pathname } = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinksModal = () => {
    setShowLinks((prevState) => !prevState);
  };
  return (
    <div
      className={`flex flex-col justify-end gap-2 ${classes} bg-black/75 p-4 border-white border-b-4 text-white  min-w-[104px] transition-all delay-1000`}
    >
      <div className="flex items-center gap-3 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          data-slot="icon"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleLinksModal}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
          />
        </svg>
      </div>

      {showLinks && (
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-1 gap-4 animate-fade-up place-items-center mt-4">
          <EmailShareButton
            url={`https://dominik-croci-blog.netlify.app${pathname}`}
            subject={`Check out this Blog by ${activePost.post.author}: ${activePost.post.title} 🚀`}
            title={`Check out this Blog by ${activePost.post.author}: ${activePost.post.title} 🚀`}
          >
            <EmailIcon round={true} />
          </EmailShareButton>
          <TwitterShareButton
            url={`https://dominik-croci-blog.netlify.app${pathname}`}
            title={`Check out this Blog by ${activePost.post.author}: ${activePost.post.title} 🚀`}
          >
            <TwitterIcon round={true} />
          </TwitterShareButton>

          <LinkedinShareButton
            url={`https://dominik-croci-blog.netlify.app${pathname}`}
            title={`Check out this Blog by ${activePost.post.author}: ${activePost.post.title} 🚀`}
          >
            <LinkedinIcon round={true} />
          </LinkedinShareButton>
          <RedditShareButton
            url={`https://dominik-croci-blog.netlify.app${pathname}`}
            title={`Check out this Blog by ${activePost.post.author}: ${activePost.post.title} 🚀`}
          >
            <RedditIcon round={true} />
          </RedditShareButton>
        </div>
      )}
    </div>
  );
}

export default SharePostBtn;
