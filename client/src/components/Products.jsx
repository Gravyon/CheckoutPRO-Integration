import React from "react";
import { Product } from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "@mui/material";

export const Products = () => {
  const products = [
    {
      id: 1234,
      title: "Samsung Galaxy S22 Ultra 5G",
      description:
        "The Note that isn't a Note, yet it may very well end up being the last Note - Samsung's Galaxy S22 Ultra has some big shoes to fill. ",
      unit_price: 10.99,
      img: "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-s22-ultra/-1220x526/gsmarena_004.jpg",
    },
    {
      id: 1235,
      title: "Samsung Galaxy A53 5G",
      description:
        "Samsung has been maintaining a particularly strong Galaxy A series of devices for some time now.",
      unit_price: 199,
      img: "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-a53-5g/-1220x526/gsmarena_001.jpg",
    },
    {
      id: 1236,
      title: "Xiaomi Redmi Note 11",
      description:
        "It brings a few notable improvements to its predecessor - the Redmi Note 10. Its Super AMOLED panel may be the same size and resolution but its refresh rate is not higher at 90Hz.  ",
      unit_price: 1.05,
      img: "https://fdn.gsmarena.com/imgroot/reviews/22/xiaomi-redmi-note-11/-1220x526/gsmarena_001.jpg",
    },
    {
      id: 1237,
      title: "Samsung Galaxy S21 FE 5G",
      description: "The Galaxy S21 series will not go gentle into the night. ",
      unit_price: 1000,
      img: "https://fdn.gsmarena.com/imgroot/reviews/22/samsung-galaxy-s21-fe-5g/-1220x526/gsmarena_004.jpg",
    },
  ];
  return (
    <>
      <h2>Products</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((prod, key) => (
          <Product key={key} prod={prod} />
        ))}
      </Row>
    </>
  );
};
