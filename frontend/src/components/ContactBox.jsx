function ContactBox() {
  return (
    <div className="px-2 h-fit">
      <div className="bg-[#181a1b] text-white w-full relative mt-6">
        <img src="/bg-dc.jpg" alt="profile background" className="" />
        <img
          src="/selfie.jpg"
          alt="profile picture"
          className="w-1/3 mx-auto rounded-full absolute left-0 right-0 top-[10%] bottom-0 border-2 border-black md:top-[5%]"
        />
        <div className="mt-[18%] lg:mt-[20%]">
          <p className="text-3xl mx-auto w-fit font-bold text-[#c5e0f2] pb-2 text-center px-2">
            Dominik Croci
          </p>
          <p className="w-full mx-auto text-xl pb-2 text-center px-2">
            Full-Stack Web Developer
          </p>
          <ul className="flex w-full justify-around text-lg p-4 gap-2 flex-wrap">
            <li className=" py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full md:w-2/3 text-center font-bold min-w-[100px] flex items-center justify-center gap-2">
              <a
                href="https://github.com/dcroci"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 496 512"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="px-4 py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full md:w-2/3 text-center font-bold min-w-[100px] flex items-center justify-center gap-2">
              <a
                href="https://www.linkedin.com/in/dominikcroci520/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="px-4 py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full md:w-2/3 text-center font-bold min-w-[100px] flex items-center justify-center gap-2">
              <a
                href="https://www.dominikcroci.com/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
