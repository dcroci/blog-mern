/* eslint-disable react/prop-types */
function FilterPosts({ setSortFilter }) {
  return (
    <select
      name="filter"
      id="filter"
      className="px-6 py-3 text-xl bg-white font-bold"
    >
      <option value="default" onClick={() => setSortFilter('default')}>
        Sort By
      </option>
      <option value="newest" onClick={() => setSortFilter('newest')}>
        Newest
      </option>
      <option value="oldest" onClick={() => setSortFilter('oldest')}>
        Oldest
      </option>
      <option value="name" onClick={() => setSortFilter('name')}>
        Name
      </option>
    </select>
  );
}

export default FilterPosts;
