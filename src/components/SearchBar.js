import { useOutletContext } from "react-router-dom";

function SearchBar() {
    const { searchText, updateSearchText } = useOutletContext();
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Toys : </label>
      <input
        type="text"
        id="search-toy-bar"
        value={searchText}
        onChange={updateSearchText}
        placeholder="Search Toys..."
      />
    </div>
  );
}

export default SearchBar;