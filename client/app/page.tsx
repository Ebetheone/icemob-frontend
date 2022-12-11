import React, { Suspense } from "react";
import ProductScene from "./Product.scene";
import CarouselContainer from "../components/CarouselContainer";

const Home = () => {
  return (
    <div>
      <CarouselContainer />
      {/* @ts-ignore */}
      <ProductScene />
    </div>
  );
};

export default Home;
