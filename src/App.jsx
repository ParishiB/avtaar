import React from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <>
      <Header />
      <div className="text-black text-center">
        <h1 className="featured-product text-[64px] font-semibold mt-[78px]">
          Featured Products
        </h1>
        <p className="text-[24px] font-thin">
          Explore and discover a variety of products
        </p>
      </div>
      <Slider />
    </>
  );
};

export default App;
