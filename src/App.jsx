import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
import "./reset.css";
import "./styles/App.css";
// import { Parallax, ParallaxLayer } from "@react-spring/web";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cancel" element={<Cancel />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
