function ContactBox() {
  return (
    <div className="px-2 h-fit">
      <div className="bg-[#181a1b] text-white w-full relative mt-6">
        <img src="/bg-dc.jpg" alt="profile background" className="" />
        <img
          src="/selfie.jpg"
          alt="profile picture"
          className="w-1/3 mx-auto rounded-full absolute left-0 right-0 top-[10%] bottom-0 border-2 border-black"
        />
        <div className="mt-[18%] lg:mt-[25%]">
          <p className="text-3xl mx-auto w-fit font-bold text-[#c5e0f2] pb-2">
            Dominik Croci
          </p>
          <p className="w-fit mx-auto text-xl pb-2">Full-Stack Web Developer</p>
          <ul className="flex w-full justify-around text-lg p-4 gap-2 flex-wrap">
            <li className=" py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full lg:w-full text-center font-bold min-w-[100px]">
              <a
                href="https://github.com/dcroci"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="px-4 py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full lg:w-full text-center font-bold min-w-[100px]">
              <a
                href="https://www.linkedin.com/in/dominikcroci520/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="px-4 py-2 bg-[#4fadeb] hover:bg-[#00a2ff] cursor-pointer rounded-full lg:w-full text-center font-bold min-w-[100px]">
              <a
                href="https://www.dominikcroci.com/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
