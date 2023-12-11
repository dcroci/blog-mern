// eslint-disable-next-line react/prop-types
function ActionCard({ bg, action }) {
  return (
    <div
      className={`${bg} p-36 flex items-center text-center rounded-md w-full max-w-xl shadow-lg shadow-black font-bold hover:-translate-y-1 text-5xl`}
    >
      <h2 className="text-center w-full mx-auto leading-10 ">
        {action} a post
      </h2>
    </div>
  );
}

export default ActionCard;
