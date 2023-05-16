import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../reset.css";
import "../styles/NavBar.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/base";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "var(--lightGreen)",
    borderRadius: "15px",
    boxShadow: 24,
    p: 3,
  };

  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("https://stripe-server-indol.vercel.app/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <main className="navBar-container">
      <div className="navBar">
        <section className="navBar-nav-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navBar-title">Flourish</h1>
          </Link>
          <ul className="navBar-link-list">
            <Link
              className="navBar-link"
              to="/shop"
              style={{ textDecoration: "none" }}
            >
              <li>Shop</li>
            </Link>
            <Link
              className="navBar-link"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              <li>About</li>
            </Link>
          </ul>
        </section>
        <section className="navBar-cart-container">
          <div className="navBar-cart">
            <Button
              style={{
                backgroundColor: "transparent",
                border: "unset",
                display: "flex",
                alignItems: "center",
              }}
              onClick={handleOpen}
            >
              <AiOutlineShoppingCart size={"24px"} color="var(--darkGreen)" />
              <p>({productsCount})</p>
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <h1
                    id="transition-modal-title"
                    className="shopping-cart-title"
                  >
                    Shopping Cart
                  </h1>
                  <ul className="cart-products-list">
                    {productsCount > 0 ? (
                      <>
                        {cart.items.map((currentProduct, idx) => (
                          <CartCard
                            key={idx}
                            id={currentProduct.id}
                            quantity={currentProduct.quantity}
                          />
                        ))}
                        <div className="cost-container">
                          <h1>Total: {cart.getTotalCost()}</h1>
                          <Button
                            className="checkout-button"
                            onClick={checkout}
                          >
                            Checkout
                          </Button>
                        </div>
                      </>
                    ) : (
                      <h1 className="cart-noItems">No items!</h1>
                    )}
                  </ul>
                </Box>
              </Fade>
            </Modal>
          </div>
        </section>
      </div>
    </main>
  );
}
