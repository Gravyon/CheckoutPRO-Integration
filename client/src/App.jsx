import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <Container className="mb-4">
        <Products />
      </Container>
    </>
  );
}

export default App;
