import React from "react";
import PlantCard from "../components/PlantCard";
import PotteryCard from "../components/PotteryCard";
import "../reset.css";
import "../styles/Shop.css";
import { productsArray } from "../productStore";
import { Fade } from "react-reveal";

export default function () {
  return (
    <Fade duration={400}>
      <main className="page-container">
        <h1 className="plants-title">Plants</h1>
        <div className="plants-container">
          {productsArray.slice(0, 3).map((plant, idx) => (
            <PlantCard className="plants-plantCard" key={idx} product={plant} />
          ))}
        </div>
        <h1 className="plants-title">Pottery</h1>
        <div className="plants-container">
          {productsArray.slice(3, 6).map((plant, idx) => (
            <PotteryCard key={idx} product={plant} />
          ))}
        </div>
      </main>
    </Fade>
  );
}
