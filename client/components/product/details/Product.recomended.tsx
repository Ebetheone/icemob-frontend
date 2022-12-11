"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { URL } from "../../../utils/url";
import { Image, Card } from "antd";
import { useCartContext } from "../../../context/cart.context";
import { queryClient } from "../../../utils/queryClient";

type PageProps = {
  id: string;
};

export default function ProductRecommended({ id }: PageProps) {
  const { cartItems } = useCartContext();
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log(id);
    if (cartItems && cartItems[0]?.id) {
      setProductId(cartItems[0]?.id);
    } else if (id && id !== "") {
      setProductId(id);
    } else {
      setProductId("6391cbf7f5e4e930a1395967");
    }
    console.log(productId);
    if (productId)
      fetch(`${URL}/product/recommended/${productId}`)
        .then((res) => res.json())
        .then((res) => setProduct(res.result));
  }, [productId]);

  const { Meta } = Card;
  return (
    <section>
      <h2 className="title-lists">САНАЛ БОЛГОХ</h2>
      <section className="recommended">
        {product.map((item: any) => {
          return (
            <section key={item._id}>
              <Link href={`/product/${item._id}`}>
                <Card
                  style={{ width: 170, margin: 10 }}
                  hoverable
                  bodyStyle={{ padding: 0, margin: 10 }}
                  cover={
                    <Image alt="example" height={170} src={item.img[0].name} />
                  }
                >
                  <Meta title={item.name} description={`${item.price}₮`} />
                </Card>
              </Link>
            </section>
          );
        })}
      </section>
    </section>
  );
}
