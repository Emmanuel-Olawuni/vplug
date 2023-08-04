import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignIn";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
  );
}

export default App;
