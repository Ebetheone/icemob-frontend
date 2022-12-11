"use client";
import React from "react";
import Link from "next/link";
import { URL } from "../../utils/url";
import Image from "next/image";
import { Product, ProductType } from "../../typin";
import { Badge } from "antd";
import ProductListDetails from "./ProductListDetails";

// const fetchProducts = async () => {
//   const res = await fetch(`${URL}/product/all`, { cache: "no-cache" });
//   return res.json();
// };

type Props = {
  data: ProductType;
};

export default function ProductLatest({ data }: Props) {
  // const { result } = await fetchProducts();
  return (
    <section className="grid-container">
      <h2 className="title">#СҮҮЛД НЭМЭГДСЭН</h2>
      <section className="Card">
        {data.map((item: any) => {
          return <ProductListDetails key={item._id} item={item} />;
        })}
      </section>
    </section>
  );
}
