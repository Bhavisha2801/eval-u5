import React from "react";
import { Routes , Route } from "react-router-dom";
import './App.css';
import {Home} from "./Components/Home"
import {Products} from "./Components/Products"
import {ProductDetails} from "./Components/ProductDetails"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register";
import {Navbar} from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}  />
        <Route path="/products/:productId" element={<ProductDetails />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </div>
  );
}

export default App;
