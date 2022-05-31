import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Shipping from "./pages/Shipping";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
