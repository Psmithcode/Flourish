import { useEffect, useState } from "react";
import plantImage from "../plant-image.png";
import "../styles/PlantCard.css";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export default function PlantCard(props) {
  const product = props.product;

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  const [isAdded, setIsAdded] = useState(false);
  
  return (
    <main className="plantCard-container">
      <div className="plantCard-image-container">
        <img className="plantCard-image" src={plantImage} alt="plant" />
      </div>
      <h1 className="plantCard-plant-title">{product.title}</h1>
      <p className="plantCard-plant-price">{product.price}</p>
      {productQuantity > 0 ? (
        <div className="plantCard-button-container">
          <GrSubtract
            className="plantCard-add-button"
            onClick={() => cart.removeOneFromCart(product.id)}
          />
          <p>{productQuantity}</p>
          <GrAdd
            className="plantCard-add-button"
            onClick={() => cart.addOneToCart(product.id)}
          />
        </div>
      ) : (
        <div className="plantCard-button-container">
          <GrAdd
            className="plantCard-add-button"
            onClick={() => cart.addOneToCart(product.id)}
          />
        </div>
      )}
    </main>
  );
}
