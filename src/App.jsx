import "./App.css";
import About from "./Components/About/About";
import Certificate from "./Components/Achievments/Certificates/Certificate";
import Contact from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Certificate />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
