import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignIn";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/Login";

import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  );
}

export default App;
