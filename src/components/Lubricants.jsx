import React from "react";
import { Container, Row } from "react-bootstrap";
import LubricantGold from "../assets/img/png/lubricant-gold.webp";
import Commonbtn from "../comonbtn/Comonbtn";
import WhiteCard from "../assets/img/png/whiteCard.webp";

const Lubricants = () => {
  return (
    <div className="py-168-125 position-relative overflow-hidden max-1440 mx-auto ">
      <Container className="min-h-678">
        <div className=" d-flex  justify-content-end mb-113">
          <h2 className="max-745 w-100 mb-0 ff-poppins fw-800 fs-52 lh-62 clr-white">
            PIONEERS OF{" "}
            <span className=" fw-normal fst-italic position-relative redBox">
              LUBRICANTS
            </span>
            <span className=" d-inline-block ">& GREASE MANUFACTURING</span>
          </h2>
        </div>
        {/* position image */}
        <img
          className="goldimg-size d-none d-md-block"
          src={LubricantGold}
          alt="LubricantGold"
        />
        <div className=" d-flex justify-content-end">
          <div className="mt-38">
            <h4 className="mb-45 fw-normal fs-24 lh-36 ff-dm-sans max-555">
              Atlantic Grease & Lubricants is one of the leading manufacturers
              in the{" "}
              <span className=" fw-bold clr-black">automotive industry</span>{" "}
              providing high-performance products certified by renowned European
              and American automobile industries.
            </h4>
            <Commonbtn name="READ OUR STORY" />
          </div>
        </div>
        {/* position image */}
        <img src={WhiteCard} className="whiteCard" alt="white-card" />
      </Container>
    </div>
  );
};

export default Lubricants;
