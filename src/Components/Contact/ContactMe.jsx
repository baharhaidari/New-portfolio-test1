import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactMe.css";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="contact">
      <div className="title__wrapper">
        <h1>Contact Me_</h1>
      </div>

      <div className="contact__info__wrapper">
        <div className="contact__info">
          <h3>Feel Free to Get in Touch!</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            aperiam, suscipit minima incidunt ipsum nisi, recusandae praesentium
            laudantium nulla voluptas, explicabo dolor! Sint excepturi eos
            fugiat laboriosam a accusamus quos!
          </p>

          {/* <ul className="about__contact__info">
            <li>
              <span>Phone Number: </span> +93 702 73 8417
            </li>
            <li>
              <span>Email Address: </span> baharhaidari.online@gmail.com
            </li>
          </ul> */}

          <div className="social__media__wrapper">
            <h3>Follow Me on social media: </h3>
            <ul className="social__media">
              <li className="social__media__link">
                <a
                  href="https://www.twitter.com/bahar_h1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="social-media-logo"
                    icon={faXTwitter}
                  />
                </a>
              </li>

              <li className="social__media__link">
                <a
                  href="https://www.instagram.com/bahar._.haidari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="social-media-logo"
                    icon={faInstagram}
                  />
                </a>
              </li>

              <li className="social__media__link">
                <a
                  href="https://www.linkedin.com/in/bahar-haidari-24b550254"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="social-media-logo"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>

              <li className="social__media__link">
                <a
                  href="https://github.com/BaharHaidary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="social-media-logo"
                    icon={faGithub}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact__form">
          <input type="text" placeholder="Your fullname here..." />
          <input type="text" placeholder="Your Email here..." />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="Your message here..."
          ></textarea>
          <input type="submit" value="Send Message" className="submit__btn" />
        </div>
      </div>
    </section>
  );
}
