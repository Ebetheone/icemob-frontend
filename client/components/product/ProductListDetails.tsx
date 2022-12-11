"use client";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListDetails = ({ item }: any) => {
  return (
    <div className="card-details">
      {item.salePercentage ? (
        <Badge.Ribbon
          text={`-${item.salePercentage}%`}
          color="red"
          style={{ backgroundColor: "red" }}
        >
          <Link href={`/product/${item._id}`}>
            <Image
              src={item.img[0].name}
              width={250}
              height={240}
              alt="zurag"
            />
            <h4 style={{ margin: 10, color: "red" }}>
              <s style={{ marginLeft: 10, color: "black" }}>{item.price}₮ </s>
              <span style={{ color: "red", marginLeft: 10, marginRight: 10 }}>
                {item.price - item.saleAmount}₮
              </span>
            </h4>
            <h3 style={{ marginLeft: 20 }}>{item.name}</h3>
          </Link>
        </Badge.Ribbon>
      ) : (
        <Link href={`/product/${item._id}`}>
          <Image src={item.img[0].name} width={250} height={240} alt="zurag" />
          <h4 style={{ margin: 10, marginLeft: 20, color: "red" }}>
            {item.price}₮
          </h4>
          <h3 style={{ marginLeft: 20 }}>{item.name}</h3>
        </Link>
      )}
    </div>
  );
};

export default ProductListDetails;
