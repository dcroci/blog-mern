import { Link } from 'react-router-dom';
function BackToAdminBtn() {
  return (
    <Link to="/admin">
      <p className="bg-black text-white p-4 w-fit rounded-md m-2">
        Back to Admin
      </p>
    </Link>
  );
}

export default BackToAdminBtn;
