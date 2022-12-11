"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
const cardData = [
  {
    _id: 1,
    img: [{ name: "/assets/images/togluulagch.jpg" }],
    price: 780000,
    name: "FELLAZ• BRUSH",
  },
  {
    _id: 2,
    img: [{ name: "/assets/images/togluulagch.jpg" }],
    price: 1800000,
    name: "FELLAZ• BRUSH",
  },
];
export const RecordPlayer = ({ data }: any) => {
  const { Meta } = Card;
  return (
    <div className="playerCartsContainer">
      {data.map((item: any) => {
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
      })}
    </div>
  );
};
