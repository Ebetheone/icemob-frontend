import React, { Suspense, use } from "react";
import ProductDetails from "../../../components/product/details/Product.detail";
import ProductRecommended from "../../../components/product/details/Product.recomended";
import { queryClient } from "../../../utils/queryClient";
import { URL } from "../../../utils/url";
type PageProps = {
  params: {
    productId: string;
  };
};
const fetchProduct = async (productId: string) => {
  const res = await fetch(`${URL}/product/${productId}`, { cache: "no-store" });
  const data = await res.json();

  return data.result;
};

export default async function ProductPage({
  params: { productId },
}: PageProps) {
  const product = await fetchProduct(productId);

  return (
    <div className="ProductPagePage">
      <ProductDetails data={product} />
      <Suspense fallback={<p>Loading...</p>}>
        <ProductRecommended id={productId} />
      </Suspense>
    </div>
  );
}
