/* eslint-disable react/prop-types */
import BackToAdminBtn from '../components/BackToAdminBtn';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
function Delete() {
  return (
    <>
      <Navbar />
      <BackToAdminBtn />
      <BlogCard includeDeleteFeatures={true} />
    </>
  );
}

export default Delete;
