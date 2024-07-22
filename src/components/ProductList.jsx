import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = [
    { id: 1, name: " product 1" },
    { id: 2, name: " product 2" },
  ];

  return (
    <div className=" d-flex align-items-center justify-content-center flex-wrap pt-5">
      <Container>
        <div className="cardBox w-100 shadow  mx-auto text-center gap-3">
          <h1 className="text-center mb-4">Product List - using params</h1>
          <ul className=" d-flex  justify-content-center gap-3 ">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id} `}
                  className="fs-18 lh-28 ff-poppins fw-normal"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
