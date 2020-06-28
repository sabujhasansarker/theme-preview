import React, { Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Demo from "./Demo";
import Support from "./Support";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-custom-color" id="#home">
      <Banner />
      <Navbar />
      <Demo />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
