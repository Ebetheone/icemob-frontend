import React, { Suspense } from "react";
import { URL } from "../utils/url";
import LatestProducts from "../components/product/Product.latest";
import HighlightProducts from "../components/product/Product.highlight";
import SaleProducts from "../components/product/Product.sale";

const fetchLatestProducts = async () => {
  const res = await fetch(`${URL}/product/latest`, { cache: "no-store" });
  return res.json();
};

const fetchHighlightProducts = async () => {
  const res = await fetch(`${URL}/product/highlight`, { cache: "no-store" });
  return res.json();
};

const fetchOnSaleProducts = async () => {
  const res = await fetch(`${URL}/product/on-sale`, { cache: "no-store" });
  return res.json();
};

export default async function ProductScene() {
  const LatestProductsData = await fetchLatestProducts();
  const HighlightProductsData = await fetchHighlightProducts();
  const OnSaleProductsData = await fetchOnSaleProducts();

  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <SaleProducts data={OnSaleProductsData.result} />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <HighlightProducts data={HighlightProductsData.result} />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <LatestProducts data={LatestProductsData.result} />
      </Suspense>

      <section className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/XC2CHVw6twM?autoplay=1&mute=1"
          width="100%"
          height="320"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </section>
    </section>
  );
}
