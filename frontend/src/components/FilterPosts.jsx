function FilterPosts() {
  return (
    <select
      name="filter"
      id="filter"
      className="px-6 py-3 text-xl bg-white font-bold"
    >
      <option value="sortBy">Sort By</option>
      <option value="newest">Newest</option>
      <option value="newest">Oldest</option>
      <option value="newest">Name</option>
    </select>
  );
}

export default FilterPosts;
