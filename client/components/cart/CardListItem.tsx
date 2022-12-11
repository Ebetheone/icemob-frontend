"use client";
import { Avatar, Col, Layout, List, Row, Skeleton, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { useCartContext } from "../../context/cart.context";
import { ProductType } from "../../typin";
import { queryClient } from "../../utils/queryClient";

type CardItemProps = {
  id: string;
  quantity: number;
};

type Props = {
  data: CardItemProps;
};

const CardListItem = ({ data }: Props) => {
  const { id, quantity } = data;

  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartContext();

  const { result } = use(
    queryClient(`product-${id}`, () =>
      fetch(`${URL}/product/${id}`, { cache: "no-store" }).then((res) =>
        res.json()
      )
    )
  );

  const { Header, Content, Sider } = Layout;
  return (
    <section>
      <Row>
        <Col>
          {/* <Skeleton avatar loading={false} title={false}> */}
          <List.Item
            extra={
              <Image
                width={272}
                height={100}
                alt="logo"
                src={result.img[0].name}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={result.img[0].name} />}
              title={<Link href={`/product/${id}`}>{result.name}</Link>}
              description={result.description}
            />
            <div>content</div>
          </List.Item>
          {/* </Skeleton> */}
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </section>
  );
};
// {result && (
//
// )}
{
  /* <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={result}
        renderItem={(item: any) => (
          // <List.Item
          //   actions={[
          //     <a key="list-loadmore-edit">edit</a>,
          //     <a key="list-loadmore-more">more</a>,
          //   ]}
          // >
          //    <Skeleton avatar title={false} active>
          //     <List.Item.Meta
          //       avatar={<Avatar src={item.img[0].name} />}
          //       title={<a href="https://ant.design">{item.name}</a>}
          //       description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          //     />
          //     <div>{item.name}</div>
          //   </Skeleton>
          // </List.Item>
          <List.Item>{item.price}</List.Item>
        )}
      /> */
}
{
  /* <Layout style={{ backgroundColor: "white", color: "white" }}>
        <Header>
          <Row>
            <Col>
              <h1>Minii sags</h1>
            </Col>
            <Col>
              <h1>Hudaldan avah</h1>
            </Col>
          </Row>
        </Header>
        <Image
          src={result.img[0].name}
          width={150}
          height={100}
          alt={"cart image"}
        />
        <div>Too: {quantity}</div>
        <div>{result.price}</div>
        <div>{result.name}</div>
        <button onClick={() => increaseQuantity(id, 1)}>+</button>{" "}
        <button onClick={() => decreaseQuantity(id)}>-</button>{" "}
        <button onClick={() => removeFromCart(id)}>REMOVE</button>
      </Layout> */
}

export default CardListItem;
