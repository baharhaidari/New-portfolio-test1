import "./ProjectDetails.css";

export default function ProjectDetails(props) {
  return (
    <div className="project__container">
      <div className="Pimg__container">
        <img src={props.src} alt="" />
      </div>

      <h1>{props.title}</h1>
      <p>{props.info}</p>

      <div className="test__wrap">
        <div className="btn__container">
          <button>
            <i class="fa-brands fa-github"></i>
          </button>
          <button>
            <i class="fa-solid fa-link"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
