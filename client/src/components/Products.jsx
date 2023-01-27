import React from "react";
import { Product } from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Products = () => {
  const products = [
    {
      id: 1234,
      title: "Book",
      description: "A collection of pages",
      unit_price: 10.99,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fopened-book-4.jpg&f=1&nofb=1&ipt=49b3ac957aa571a71740d4258f9ff846e357b5ebdfb36d907138d7227fa2758d&ipo=images",
    },
    {
      id: 1235,
      title: "Computer",
      description: "programming tool",
      unit_price: 199,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F4529cc32-1f4d-4c64-9b7f-586bebde4341.7ec2847330e4299f4d15b7a3bdd618a6.jpeg&f=1&nofb=1&ipt=f16e7ae506d978c10107fc27dc7cd41b2e00cffdd1b963162606ec0b27a30d46&ipo=images",
    },
    {
      id: 1236,
      title: "Banana",
      description: "food",
      unit_price: 1.05,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J713t6KgpMa6j5dXb9AiXQHaHa%26pid%3DApi&f=1&ipt=f5a1216198d8f871073e1325a684b095c02d56fdebc0ad89fba80815893ea0fd&ipo=images",
    },
    {
      id: 1237,
      title: "Car",
      description: "4 wheels",
      unit_price: 1000,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R8SIG1MsoEIaCZlP868NugHaE8%26pid%3DApi&f=1&ipt=9eeec43897f8986f316c83c34f97797fe6cb0f8528bdedbea3446beef5d30c2d&ipo=images",
    },
  ];
  return (
    <div>
      <p>Products</p>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((prod, key) => (
          <Product key={key} prod={prod} />
        ))}
      </Row>
    </div>
  );
};
