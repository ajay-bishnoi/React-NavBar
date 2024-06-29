import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const ApiPhotos = () => {
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center">React-Router-Dome - Routing</h1>
        <div className="d-flex justify-content-center my-5">
          <Link
            className="fw-900 fs-16 lh-24 clr-white ff-chivo getBtn"
            to="/photo"
          >
            photo
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ApiPhotos;
