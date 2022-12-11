import React from "react";
import { ProductType } from "../../typin";
import ProductListDetails from "./ProductListDetails";

type Props = {
  data: ProductType;
};

export default function ProductSale({ data }: Props) {
  return (
    <section className="grid-container">
      <h2 className="title">#ХЯМДАРСАН</h2>
      <section className="Card">
        {data.map((item: any) => {
          return <ProductListDetails key={item._id} item={item} />;
        })}
      </section>
    </section>
  );
}
