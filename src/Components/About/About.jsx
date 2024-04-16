import AboutMe from "./About Me/AboutMe";
import "./About.css";
import MyTimeline from "./Timeline/TimeLine";
import Works from "./work samples info/Works";

export default function About() {
  return (
    <section className="about" id="about">
      <AboutMe />
      {/* <Works /> */}
      <MyTimeline />
    </section>
  );
}
