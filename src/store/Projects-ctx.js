// import React, { createContext, useEffect, useState } from "react";
// import C1 from "../assets/img-4.jpg";
// import C2 from "../assets/img-1.webp";
// import C3 from "../assets/work-1.jpg";
// import C4 from "../assets/img-3.jfif";

// export const ProjectsContext = createContext();

// const ProjectsContextProvider = ({ children }) => {
//   const PROJECTS__DETAILS = [
//     {
//       id: 1,
//       src: C1,
//       title: "Simon Game",
//       desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
//     },
//     {
//       id: 2,
//       src: C2,
//       title: "BitDog",
//       desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
//     },
//     {
//       id: 3,
//       src: C3,
//       title: "Personal Portfolio",
//       desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
//     },
//     {
//       id: 4,
//       src: C4,
//       title: "Todo App",
//       desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     // Filter items based on search term
//     const filtered = PROJECTS__DETAILS.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(filtered);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [searchTerm]);

//   const filterItems = (category) => {
//     if (category === "All") {
//       setFilteredItems(PROJECTS__DETAILS);
//     } else {
//       const filtered = PROJECTS__DETAILS.filter(
//         (item) => item.category === category
//       );
//       setFilteredItems(filtered);
//     }

//     setSearchTerm("");
//     setActiveCategory(category);
//     setIsMenuOpen(false);
//   };

//   // Handle search input change
//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <ProjectsContext.Provider
//       value={{ PROJECTS__DETAILS, searchTerm, handleSearchInputChange }}
//     >
//       {children}
//     </ProjectsContext.Provider>
//   );
// };

// export default ProjectsContextProvider;
