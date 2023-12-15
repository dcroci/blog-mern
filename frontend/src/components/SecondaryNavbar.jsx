/* eslint-disable react/prop-types */
import FilterPosts from './FilterPosts';
import SearchBar from './SearchBar';

function SecondaryNavbar({ searchValue, setSearchValue }) {
  return (
    <div className="bg-gray-300">
      <div className="py-2 px-4 grid grid-cols-4 justify-between max-w-[1280px] w-full mx-auto items-center ">
        <div className="w-full col-start-1 col-end-3 sm:col-end-4 md:col-start-2 md:col-end-4 md:place-self-center">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="col-start-4 place-self-end">
          <FilterPosts />
        </div>
      </div>
    </div>
  );
}

export default SecondaryNavbar;
