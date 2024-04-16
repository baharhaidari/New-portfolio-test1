/* .about__me {
  padding: 0 9%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about__me h1 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
}

.about__img__container {
  position: relative;
}

.about__img__container img {
  max-width: 26rem;
  max-height: 26rem;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}

.about__img__container::after {
  background-color: rgba(0, 0, 0, 0.8);
  content: "Ready to collaborate and bring your web projects to life!";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;
  padding: 0 1rem;
  font-size: 1.4rem;
  text-align: center;
}

.about__img__container:hover::after {
  opacity: 1;
}

.info__wrapper {
  display: flex;
  gap: 5rem;
}

.info__wrapper p {
  font-size: 1.6rem;
} */
/* 
.about__me {
  padding: 0 9%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about__me h1 {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
}

.about__img__container {
  position: relative;
}

.about__img__container img {
  max-width: 26rem;
  max-height: 26rem;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}

.about__img__container::after {
  background-color: rgba(0, 0, 0, 0.8);
  content: attr(data-text);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
}

.about__img__container:hover img {
  transform: scale(1.1);
}

.about__img__container:hover::after {
  opacity: 1;
}

.info__wrapper {
  display: flex;
  gap: 5rem;
}

.info__wrapper p {
  font-size: 1.6rem;
} */

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import "./Timeline.css";

// const MyTimeline = () => {
//   return (
//     <div className="timline__wrapper">
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element"
//           contentStyle={{ background: "#fff", color: "#000" }}
//           contentArrowStyle={{ borderRight: "7px solid blueviolet" }}
//           iconStyle={{
//             background: "blueviolet",
//             color: "#fff",
//             fontSize: "14px",
//           }}
//         >
//           <h3 className="vertical-timeline-element-title">Step 1</h3>
//           <h4>2021/2/2</h4>
//           <p>Description for Step 1</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element"
//           contentStyle={{ background: "#fff", color: "#000" }}
//           contentArrowStyle={{ borderRight: "7px solid blueviolet" }}
//           iconStyle={{ background: "blueviolet", color: "#fff" }}
//         >
//           <h3 className="vertical-timeline-element-title">Step 2</h3>
//           <h4>2022-02-01</h4>
//           <p>Description for Step 2</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element"
//           contentStyle={{ background: "#fff", color: "#000" }}
//           contentArrowStyle={{ borderRight: "7px solid  blueviolet" }}
//           iconStyle={{ background: "blueviolet", color: "#fff" }}
//         >
//           <h3 className="vertical-timeline-element-title">Step 3</h3>
//           <h4>2022-03-01</h4>
//           <p>Description for Step 3</p>
//         </VerticalTimelineElement>
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default MyTimeline;

// .flex h3 {
//   font-size: 2rem;
//   mix-blend-mode: screen;
//   position: relative;
// }
// .flex h3::before {
//   content: "";
//   position: absolute;
//   width: 20px;
//   height: 4px;
//   background-color: var(--bg-light);
//   bottom: 11px;
//   left: 100%;
//   opacity: 1;
//   animation: blink 0.9s infinite;
// }

// .flex a {
//   position: relative;
//   color: #fff;
//   font-size: 1.7rem;
//   font-weight: 600;
//   mix-blend-mode: screen;
//   font-family: var(--second-font);
// }
// .flex a::after {
//   content: "";
//   position: absolute;
//   bottom: -5px;
//   left: 0;
//   width: 100%;
//   border: 1.8px solid #fff;
//   transform: scaleX(0);
//   transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
//   transform-origin: right center;
// }

// .flex a:hover::after {
//   transform: scaleX(1);
//   transform-origin: left center;
//   transition-duration: 0.4s;
// }

/* .project__container .btn__container button span {
  display: none;
  transition: display 1s;
} */

/* .project__container .btn__container button i {
  display: inline-block;
  transition: transform 0.3s;
} */

/* .project__container .btn__container button:hover span {
  display: inline-block;
} */

/* .project__container {
  border: 2px solid rgb(184, 184, 196);
  padding: 1.3rem;
  margin: 2rem;
  margin-bottom: 2rem;
  background-color: #cfd2d5;
  border-radius: 10px;
}

.Pimg__container img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  height: 200px;
}

.project__container h1 {
  font-size: 1.9rem;
  font-weight: 600;
  margin: 0.5rem 0;
  text-align: left;
  color: blueviolet;
}

.project__container p {
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.project__container span i {
  font-size: 1.2rem;
  margin-right: 0.2rem;
  color: rgb(142, 136, 147);
}

.project__container span i:hover {
  cursor: pointer;
}

.project__container .btn__container {
  margin-top: 1.5rem;
}

.project__container .btn__container button {
  position: relative;
  background: transparent;
  border: none;
  margin-right: 1rem;
  font-size: 1.4rem;
  color: #000;
  padding: 0.3rem 1rem;
  overflow: hidden;
  white-space: nowrap;
}

.project__container .btn__container button:hover {
  cursor: pointer;
}

.project__container .btn__container button span {
  display: inline-block;
  transform: translateY(-200%);
  transition: transform 0.6s;
}

.project__container .btn__container button:hover span {
  transform: translateY(0);
} */

// .img__container {
//   position: relative;
//   max-width: 25rem;
//   max-height: 25rem;
//   overflow: hidden;
// }

// .img__container::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
//   background: linear-gradient(
//     45deg,
//     rgba(255, 255, 255, 0.1) 0%,
//     rgba(255, 255, 255, 0.5) 100%
//   );
//   opacity: 0;
//   transform: rotate(45deg) scale(0);
//   transition: opacity 0.5s ease, transform 0.5s ease;
// }

// .img__container:hover::before {
//   opacity: 1;
//   transform: rotate(45deg) scale(1);
// }

// .img__container img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: filter 0.5s ease;
// }

// .img__container:hover img {
//   filter: grayscale(100%);
// }

/* .img__container:hover::before {
  box-shadow: 0 0 0 10px rgba(107, 24, 174, 0.4);
} */

/* .img__container {
  position: relative;
  display: inline-block;
}

.img__container::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  z-index: -1;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-size: 200% 100%;
  animation: shimmer-border 4s linear infinite;
}

@keyframes shimmer-border {
  0% {
    background-position: -200% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

*/

// import Slider from "react-slick";
// import ProjectFilters from "./Filters/ProjectFilters";
// import "./Projects.css";
// import ProjectSearch from "./Search/ProjectSearch";
// import ProjectDetails from "./ProjectDetails/ProjectDetails";
// import { useContext } from "react";
// import { ProjectsContext } from "../../store/Projects-ctx";
// import C1 from "../../assets/img-4.jpg";
// import C2 from "../../assets/img-1.webp";
// import C3 from "../../assets/work-1.jpg";
// import C4 from "../../assets/img-3.jfif";

// export default function Projects() {
//   // const { PROJECTS__DETAILS } = useContext(ProjectsContext);
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

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="projects">
//       <h1>My Projects_</h1>

//       <div className="search__filter">
//         <ProjectFilters />
//         <ProjectSearch />
//       </div>

//       <Slider {...settings}>
//         {PROJECTS__DETAILS.map((certificate, index) => {
//           return (
//             <div key={index}>
//               <ProjectDetails
//                 src={certificate.src}
//                 title={certificate.title}
//                 info={certificate.desc}
//               />
//             </div>
//           );
//         })}
//       </Slider>
//     </section>
//   );
// }

// projetc

// import Slider from "react-slick";
// import ProjectFilters from "./Filters/ProjectFilters";
// import "./Projects.css";
// import ProjectSearch from "./Search/ProjectSearch";
// import ProjectDetails from "./ProjectDetails/ProjectDetails";
// import { useContext } from "react";
// import { ProjectsContext } from "../../store/Projects-ctx";
// import C1 from "../../assets/img-4.jpg";
// import C2 from "../../assets/img-1.webp";
// import C3 from "../../assets/work-1.jpg";
// import C4 from "../../assets/img-3.jfif";

// export default function Projects() {
//   // const { PROJECTS__DETAILS } = useContext(ProjectsContext);
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

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="projects">
//       <h1>My Projects_</h1>

//       <div className="search__filter">
//         <ProjectFilters />
//         <ProjectSearch />
//       </div>

//       <Slider {...settings}>
//         {PROJECTS__DETAILS.map((certificate, index) => {
//           return (
//             <div key={index}>
//               <ProjectDetails
//                 src={certificate.src}
//                 title={certificate.title}
//                 info={certificate.desc}
//               />
//             </div>
//           );
//         })}
//       </Slider>
//     </section>
//   );
// }
