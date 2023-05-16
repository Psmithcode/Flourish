import { Link } from "react-router-dom";
import "../styles/Home.css";
import Fade from "react-reveal";
export default function Home() {
  return (
    <Fade duration={400}>
      <main className="page-container home">
        <h1 className="home-title">Flourish</h1>
        <h3 className="home-sub-title">Browse our products</h3>
        <Link to="/shop" className="home-shop-button">
            Shop
        </Link>
      </main>
    </Fade>
  );
}
