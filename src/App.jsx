import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </>
  );
};

export default App;
