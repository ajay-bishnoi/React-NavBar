import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = {
    1: { name: "Product 1" },
    2: { name: "Product 2" },
  };
  const product = productDetails[id];
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className=" d-flex align-items-center justify-content-center flex-wrap pt-5">
      <Container>
        <div className="cardBox w-100 shadow  mx-auto text-center gap-3">
          <h1 className="text-center mb-4">Product Details</h1>
          <div className=" d-flex flex-column align-items-center gap-3">
            <h1 className=" fs-16 lh-24 clr-black mb-0">{product.name}</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
