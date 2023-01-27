import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
export const Product = ({ prod }) => {
  const handleClick = async () => {
    const url = "http://localhost:5000";
    try {
      const res = await axios
        .post(`${url}/create_preference`, prod)
        .then((res) => (window.location.href = res.data.msg.init_point));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={prod.img}
        style={{ objectFit: "cover", maxHeight: "200px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{prod.title}</span>
          <span className="ms-2 text-muted">{prod.unit_price}</span>
        </Card.Title>

        <div className="mt-auto">
          <Button onClick={handleClick} className="w-100">
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
