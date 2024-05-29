import React from "react";
import { Container } from "react-bootstrap";
import Commonbtn from "../comonbtn/Comonbtn";

const Hero = () => {
  return (
    <div className=" flex-grow-1 d-flex align-items-end">
      <Container>
        <div className=" d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-end gap-2 gap-md-0  mb-sm-3 mb-2 ">
          <h1 className="mb-0 fw-800 fs-60 lh-72 clr-white ff-poppins    ">
            OPTIMISING YOUR{" "}
            <span className=" d-lg-inline-block d-block d-sm-inline">
              VEHICLE{" "}
              <span className=" fw-normal fs-60 lh-72 clr-white fst-italic">
                PERFORMANCE
              </span>
            </span>
          </h1>
          <Commonbtn name="EXPLORE" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
