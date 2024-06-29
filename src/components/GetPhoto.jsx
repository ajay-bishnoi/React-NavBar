import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetPhoto = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setPhoto(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center">Scroll-Down </h1>
        <div className=" d-flex justify-content-center my-5">
          <Link className="fw-900 fs-16 lh-24 clr-white ff-chivo getBtn" to="/">
            Back
          </Link>
        </div>
        {
          <div className=" d-flex flex-wrap">
            {photo &&
              photo.map((productImages) => (
                <div style={{ margin: "10px", textAlign: "center" }}>
                  <img
                    src={productImages}
                    alt="product-image"
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
              ))}
          </div>
        }
      </Container>
    </div>
  );
};

export default GetPhoto;
