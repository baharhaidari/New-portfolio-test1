import "./ProjectSearch.css";

export default function ProjectSearch(props) {
  return (
    <div className="search__container">
      <label htmlFor="">Search By Title: </label>
      <input
        type="search"
        placeholder="Type somthing..."
        value={props.searchTerm}
        onChange={props.handleSearchInputChange}
      />
    </div>
  );
}
