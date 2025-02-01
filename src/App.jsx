import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DatesSection from "./components/DatesSection";
import MessageVideo from "./components/MessageVideo";
import WeddingInvitation from "./components/WeddingInvitation";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DatesSection />
      <MessageVideo/>
      <WeddingInvitation />
      <Footer />
    </div>
  );
};

export default App;