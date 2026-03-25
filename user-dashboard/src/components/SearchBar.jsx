const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-3 py-2 rounded w-full md:w-1/3"
    />
  );
};

export default SearchBar;