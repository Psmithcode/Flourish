import { Button } from "@mui/base";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productStore";
import { RxTrash } from "react-icons/rx";
import "../styles/CartCard.css";

export default function CartCard(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <main className="cartCard-container">
      <h3 className="cartCard-title">{productData.title}</h3>
      <p className="cartCard-quantity">x{quantity}</p>
      <p className="cartCard-price">
        ${Math.trunc(quantity * productData.price)}
      </p>
      <Button
        className="cartCard-delete"
        onClick={() => cart.deleteFromCart(id)}
      >
        <RxTrash color="red" size={"20px"}/>
      </Button>
    </main>
  );
}
