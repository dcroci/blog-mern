/* eslint-disable react/prop-types */
function HamburgerIcon({ setShowNav }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-8 h-8 row-start-1 col-start-4 ml-auto cursor-pointer"
      onClick={() => {
        setShowNav((prevState) => !prevState);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export default HamburgerIcon;
