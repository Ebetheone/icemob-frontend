// "use client";
import React, { Suspense } from "react";
import ProductListComponent from "./ProductList.component";

const Product = () => {
  return (
    <div className="ProductPage">
      {/* @ts-ignore */}
      {/* <Suspense fallback={<p>laoding product</p>}> */}
      <ProductListComponent />
      {/* </Suspense> */}
    </div>
  );
};
export default Product;
