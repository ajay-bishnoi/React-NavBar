import React, { useState } from "react";
import { Container } from "react-bootstrap";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(`Name : ${name}`);
    console.log(`Password : ${password}`);
    setName("");
    setPassword("");
  };

  return (
    <div className="py-5">
      <Container>
        <form
          onSubmit={formSubmit}
          className=" w-100 shadow  mx-auto text-center gap-3"
        >
          <h1 className=" text-center mb-4">Form-Validation</h1>
          <div className="d-flex align-items-center justify-content-lg-between justify-content-center w-100 gap-lg-2 gap-sm-3 gap-4 flex-lg-row flex-column">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-sm-3 gap-2 justify-content-lg-between">
              <label className=" ff-poppins fw-medium fs-28 lh-28 clr-black">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
                placeholder="Enter Name"
                className="ff-poppins fw-medium fs-18 lh-28 clr-black inputbox2"
              />
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center gap-sm-3 gap-2 justify-content-lg-between">
              <label className=" ff-poppins fw-medium fs-28 lh-28 clr-black">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="Enter Password"
                className="ff-poppins fw-medium fs-18 lh-28 clr-black inputbox2"
              />
            </div>
          </div>
          <button
            className="mt-5 mb-2 submitbtn fw-bold fs-16"
            value="submit"
            type="submit"
          >
            Submit
          </button>
          <h3 className="mb-0">Check the value in console</h3>
        </form>
      </Container>
    </div>
  );
};
export default LoginForm;
