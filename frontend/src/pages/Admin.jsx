import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ActionCard from '../components/ActionCard';

// eslint-disable-next-line react/prop-types
function Admin() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 place-items-center max-w-4xl mx-auto w-full gap-12 ">
        <Link to="/create">
          <ActionCard bg={'bg-green-400 '} action="Create" />
        </Link>
        <Link to="/update">
          <ActionCard bg={'bg-blue-400'} action="Update" />
        </Link>
        <Link to="/delete">
          <ActionCard bg={'bg-red-400'} action="Delete" />
        </Link>
      </div>
    </>
  );
}

export default Admin;
