import { Fade } from "react-reveal";
import "../styles/About.css";

export default function About() {
  return (
    <Fade duration={400}>
      <main className="page-container about">
        <div className="about-text-container">
          <p>
            Flourish is a plant selling business that offers a wide range of
            beautiful and healthy plants to customers. At Flourish, we believe
            that plants are not only decorative but also therapeutic and can
            bring a sense of calm and happiness to people's lives. We take pride
            in our high-quality plants that are carefully selected from trusted
            suppliers to ensure that they are healthy and will thrive in a
            variety of environments.
          </p>
          <p>
            Our team at Flourish is passionate about sharing our love for plants
            with our customers and providing them with exceptional customer
            service. We offer a variety of plants, from small succulents to
            large statement plants, as well as planters, potting soil, and other
            accessories to help customers create the perfect environment for
            their plants. We also offer workshops and classes to help customers
            learn more about plant care and to inspire them to continue to grow
            their plant collection. At Flourish, we are dedicated to helping our
            customers create their own indoor garden oasis and to fostering a
            love for plants that will last a lifetime.
          </p>
        </div>
      </main>
    </Fade>
  );
}
