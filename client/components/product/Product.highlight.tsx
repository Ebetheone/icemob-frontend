"use client";
import React from "react";
import Link from "next/link";
import { URL } from "../../utils/url";
import Image from "next/image";
import { Product, ProductType } from "../../typin";
import { Badge } from "antd";
import ProductListDetails from "./ProductListDetails";

type Props = {
  data: ProductType;
};

export default function ProductHighlight({ data }: Props) {
  return (
    <section className="grid-container">
      <h2 className="title">#ОНЦЛОХ</h2>
      <section className="Card">
        {data.map((item: any) => {
          return <ProductListDetails key={item._id} item={item} />;
        })}
      </section>
    </section>
  );
}
