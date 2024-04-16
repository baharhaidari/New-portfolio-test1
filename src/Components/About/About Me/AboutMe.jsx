import "./AboutMe.css";
import image from "../../../assets/profi.jpg";

export default function AboutMe() {
  const paragraphText =
    "Ready to collaborate and bring your web projects to life!";
  const buttonText = "Get In Touch";

  return (
    <section className="about__me" id="aboutMe">
      <h1>About Me_</h1>

      <div className="info__wrapper">
        <div className="about__img__container">
          <img src={image} alt="" />
          <div className="about__img__overlay">
            <p className="about__img__paragraph">{paragraphText}</p>
            <a href="#" className="about__img__button">
              {buttonText}
              <i class="fas fa-angle-double-down about__img__icon"></i>
            </a>
          </div>
        </div>

        <div className="about__info">
          <p>
            I am <span className="name">Bahar</span>, a highly motivated and
            passionate frontend web developer with extensive expertise in HTML,
            CSS, JavaScript, and various frontend frameworks. With 2 years of
            hands-on experience, my focus lies in crafting visually captivating
            and intuitive websites that leave a lasting impression. I am
            dedicated to delivering exceptional user experiences by seamlessly
            blending creativity, clean code, and industry best practices. Let's
            join forces and collaboratively transform your web project into a
            vibrant reality! Together, we'll create a digital masterpiece that
            engages and delights your audience at every click.
          </p>

          <ul className="about__contact__info">
            <li>
              <span>Phone Number: </span> +93 702 73 8417
            </li>
            <li>
              <span>Email Address: </span> baharhaidari.online@gmail.com
            </li>
            <li>
              <span>Location: </span> Herat, Afghanistan
            </li>
            <li>
              <span>Freelance: </span>
              <span className="opacity">Available_</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
