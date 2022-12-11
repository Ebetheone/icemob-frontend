"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Empty } from "antd";
import Image from "next/image";
import Link from "next/link";

import { URL } from "../../utils/url";

export enum TabType {
  Accessories = "ACCESSORIES",
  Pyanz = "PYANZ",
}

interface Props {
  data: any;
}
export const Records = ({ data }: Props) => {
  const { Meta } = Card;
  console.log(data);
  return (
    <div className="productCartsContainer">
      {data && data.length > 1 ? (
        data.map((item: any) => {
          return (
            <div key={item._id} className="productCart">
              <Link href={`/product/${item._id}`}>
                <Card
                  style={{ width: 230, margin: 10 }}
                  hoverable
                  bodyStyle={{ padding: 0, margin: 10 }}
                  cover={
                    <Image
                      src={item.img[0].name}
                      height={250}
                      width={250}
                      alt="zurag"
                      className="product-img"
                    />
                  }
                >
                  <Meta title={item.name} description={`${item.price}₮`} />
                  <Meta title={<ShoppingCartOutlined />} />
                </Card>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="empty">
          <Empty />
        </div>
      )}
    </div>
  );
};
