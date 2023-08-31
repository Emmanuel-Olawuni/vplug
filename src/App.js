import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignIn";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/Login";
import SingleProduct from "./components/SingleProduct";
import Checkout from "./pages/checkout/checkout";

import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/product/:id" element={<SingleProduct />}/>
    </Routes>
  );
}

export default App;
