import "./Certificate.css";
import Slider from "react-slick";
import C1 from "../../../assets/Screenshot (402).png";
import C2 from "../../../assets/Screenshot (420).png";
import C3 from "../../../assets/Screenshot (427).png";
import C4 from "../../../assets/Screenshot (428).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificate.css";
import { useState } from "react";
import Modal from "react-modal";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificatesInfo = [
    {
      src: C1,
      title: "Intro to SQL",
    },

    {
      src: C2,
      title: "Intermediate SQL",
    },

    {
      src: C3,
      title: "Intro to ChatGPT",
    },

    {
      src: C4,
      title: "Prompt Engineering",
    },

    {
      src: C1,
      title: "Frontend Development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const modalStyles = {
    content: {
      width: "600px", // Adjust the width as desired
      height: "400px", // Adjust the height as desired
      margin: "auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#b9abcad1",
      borderRadius: "10px",
    },
  };

  return (
    <section className="certificates">
      <h1>My Certificates_</h1>
      <div className="certificates__container">
        <Slider {...settings}>
          {certificatesInfo.map((certificate, index) => {
            return (
              <div className="Cimg__container" key={index}>
                <div className="certificate__img__container">
                  <img src={certificate.src} alt="" />
                  <h3>
                    <span> {certificate.title} </span>
                    <span>
                      <i
                        className="fa-solid fa-magnifying-glass magnifier__icon"
                        title="Closer Look"
                        onClick={() => openModal(certificate.src)}
                      ></i>
                    </span>
                  </h3>
                  <span>Date: 2022, 2023</span>
                  <br />
                  <span>Academy: Code to Inspire</span>
                  <br />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Certificate Modal"
        style={modalStyles} // Add this line
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ height: "300px", width: "500px", borderRadius: "10px" }}
          />
        )}
        <br />
        <button
          onClick={() => setIsModalOpen(false)}
          className="close__modal__btn"
        >
          Close
        </button>
      </Modal>
    </section>
  );
}
