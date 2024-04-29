import aboutImg from "../assets/images/img_10.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../components/Swiper.css";

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      document.body.classList.add("about-bg");
    } else {
      document.body.classList.remove("about-bg");
    }
  }, [location.pathname]);

  return (
    <div className="about-container" title="aboutpage">
      <img src={aboutImg} alt="About" className="aboutImg" />
      <article className="about_title">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          perferendis harum aliquid commodi perspiciatis, obcaecati debitis,
          laudantium nisi magnam officia ea nulla molestias suscipit id, ad
          voluptas. Id, est in. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. <br />
          <br />
          Explicabo magni aliquid provident reprehenderit perferendis cum
          minima. Sequi velit quasi consequatur nulla odit voluptates vero
          repellat nam, aliquid in sint commodi?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sed eligendi obcaecati tenetur qui
          ratione! Iusto consectetur, beatae ducimus delectus eius corporis
          eligendi sequi. Consequatur veniam autem dignissimos amet modi
          quaerat?
        </p>
      </article>
    </div>
  );
};
export default AboutPage;
