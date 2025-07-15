import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet>
        <Home></Home>
      </Outlet>

      <Footer></Footer>
    </>
  );
};

export default App;
