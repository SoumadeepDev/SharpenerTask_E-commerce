import aboutImg from "../assets/images/img_10.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../components/Swiper.css";

const AboutPage = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (location.pathname === "/about") {
      document.body.classList.add("about-bg");
    } else {
      document.body.classList.remove("about-bg");
    }
  }, [location.pathname]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="about-container" title="aboutpage">
      <img src={aboutImg} alt="About" className="aboutImg" />
      <article className="about_title">
        <h2>Our Story</h2>
        <p>
          Welcome to our world of Indian Cinema Classics! Step into a realm
          where every frame tells a timeless tale, where the echoes of golden
          eras and the whispers of Oscar glory reside. At our site, we celebrate
          the richness of Indian movies, from the mesmerizing melodies of
          classical masterpieces to the unforgettable performances that have
          graced the silver screen. Dive into the cinematic treasures that have
          not only captivated audiences but also earned acclaim on the
          prestigious Oscar stage. Join us on a journey through the heart and
          soul of Indian cinema, where every film is a masterpiece, every artist
          a legend, and every story a legacy.
        </p>
        <form
          action="https://formspree.io/f/myyrozqv"
          method="POST"
          className="contactForm"
        >
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          <button type="submit" className="sendbtn">
            Send Message
          </button>
        </form>
      </article>
    </div>
  );
};
export default AboutPage;
