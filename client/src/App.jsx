import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Products } from "./components/Products";
import { Failure } from "./pages/Failure";
import { Success } from "./pages/Success";
import { Pending } from "./pages/Pending";

function App() {
  return (
    <Router>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<Success />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
