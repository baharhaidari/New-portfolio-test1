import Slider from "react-slick";
import ProjectFilters from "./Filters/ProjectFilters";
import "./Projects.css";
import ProjectSearch from "./Search/ProjectSearch";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import { useState } from "react";
import C1 from "../../assets/img-4.jpg";
import C2 from "../../assets/img-1.webp";
import C3 from "../../assets/work-1.jpg";
import C4 from "../../assets/img-3.jfif";

const PROJECTS__DETAILS = [
  {
    id: 1,
    src: C1,
    title: "Simon Game",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
    category: "Frontend development",
  },
  {
    id: 2,
    src: C2,
    title: "BitDog",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
    category: "Frontend development",
  },
  {
    id: 3,
    src: C3,
    title: "Personal Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
    category: "Frontend development",
  },
  {
    id: 4,
    src: C4,
    title: "Todo App",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
    category: "Backend development",
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(PROJECTS__DETAILS);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSearchInputChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filtered = PROJECTS__DETAILS.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // const filterItems = (category) => {
  //   setActiveCategory(category);
  //   if (category === "All") {
  //     setFilteredItems(PROJECTS__DETAILS);
  //   } else {
  //     const filtered = PROJECTS__DETAILS.filter(
  //       (item) => item.category === category
  //     );
  //     setFilteredItems(filtered);
  //   }
  // };

  const filterItems = (category) => {
    setActiveCategory(category);
    let filtered;
    if (category === "All") {
      filtered = PROJECTS__DETAILS;
    } else {
      filtered = PROJECTS__DETAILS.filter((item) => item.category === category);
    }

    // Duplicate items until we have at least three items
    while (filtered.length < 3) {
      filtered = filtered.concat(filtered);
    }

    setFilteredItems(filtered.slice(0, 3));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="search__filter">
        <ProjectFilters
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <ProjectSearch
          searchTerm={searchTerm}
          handleSearchInputChange={handleSearchInputChange}
        />
      </div>

      {/* <Slider {...settings}>
        {filteredItems.map((certificate, index) => {
          return (
            <div key={index}>
              <ProjectDetails
                src={certificate.src}
                title={certificate.title}
                info={certificate.desc}
              />
            </div>
          );
        })}
      </Slider> */}

      {filteredItems.length >= 3 ? (
        <Slider {...settings}>
          {filteredItems.map((certificate, index) => (
            <div key={index}>
              <ProjectDetails
                src={certificate.src}
                title={certificate.title}
                info={certificate.desc}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="project__container">
          {filteredItems.map((certificate, index) => (
            <ProjectDetails
              key={index}
              src={certificate.src}
              title={certificate.title}
              info={certificate.desc}
            />
          ))}
        </div>
      )}
    </section>
  );
}
