import "./ProjectFilters.css";

export default function ProjectFilters({ activeCategory, filterItems }) {
  return (
    <div className="filters">
      <ul className="filter__container">
        <span
          className={`filter__item ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => filterItems("All")}
        >
          All
        </span>

        <span
          className={`filter__item ${
            activeCategory === "Frontend development" ? "active" : ""
          }`}
          onClick={() => filterItems("Frontend development")}
        >
          Frontend development
        </span>

        <span
          className={`filter__item ${
            activeCategory === "Backend development" ? "active" : ""
          }`}
          onClick={() => filterItems("Backend development")}
        >
          Backend development
        </span>
      </ul>
    </div>
  );
}
