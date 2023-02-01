import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Products } from "./client/components/Products.jsx";
import { Success } from "./client/pages/Success";
import { Pending } from "./client/pages/Pending";
import { Failure } from "./client/pages/Failure";

function App() {
  return (
    <Router>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<Success />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
