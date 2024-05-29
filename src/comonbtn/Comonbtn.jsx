import React from "react";

const Commonbtn = (props) => {
  return (
    <>
      <button className="fw-900 fs-16 lh-24 clr-white ff-chivo getBtn">
        {props.name}
      </button>
    </>
  );
};
export default Commonbtn;
