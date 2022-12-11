"use client";
import React from "react";
import { Carousel, Image, Row, Col } from "antd";
import CarouseImages from "../utils/json/carouselImages.json";
import CarouselTop from "../utils/json/smallCarouselTop.json";
import CarouselBottom from "../utils/json/smallCarouselBottom.json";
const CarouselContainer = () => {
  return (
    <section className="carouselContainer">
      <Row justify={"start"} align="stretch">
        <Col span={15}>
          <Image.PreviewGroup>
            <Carousel autoplay>
              {CarouseImages.map((img) => {
                return (
                  <Image
                    key={img.id}
                    height={800}
                    width="100%"
                    src={img.name}
                    preview={{ getContainer: "#root" }}
                    alt="caoursel image"
                  />
                );
              })}
            </Carousel>
          </Image.PreviewGroup>
        </Col>

        <Col span={9} offset={0}>
          <Carousel dots={false} draggable={true}>
            {CarouselTop.map((img) => {
              return (
                <Image
                  key={img.id}
                  height={400}
                  width="100%"
                  src={img.name}
                  preview={false}
                  alt="caoursel image"
                />
              );
            })}
          </Carousel>
          <Carousel dots={false} draggable={true}>
            {CarouselBottom.map((img) => {
              return (
                <Image
                  key={img.id}
                  height={400}
                  width="100%"
                  src={img.name}
                  preview={false}
                  alt="caoursel image"
                />
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};

export default CarouselContainer;
