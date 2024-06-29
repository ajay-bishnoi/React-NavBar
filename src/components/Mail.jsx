import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";

function Mail() {
  const [inputValue, setInputValue] = useState({ Name: "", Email: "" });

  const fromRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const submitValue = (e) => {
    e.preventDefault();
    const serviceId = "service_mew7z3n";
    const templateId = "template_470n47j";
    const userId = "YIVYaWyQeUqZgTYxG";

    emailjs.sendForm(serviceId, templateId, fromRef.current, userId).then(
      (result) => {
        console.log("Sucess!", result.text);

        setInputValue({ Name: "", Email: "" });
      },
      (error) => {
        console.error("Failed!", error.text);
      }
    );
    emailjs.send(
      "service_mew7z3n",
      "template_470n47j",
      {
        name_user: inputValue.Name,
        email_user: inputValue.Email,
      },
      "YIVYaWyQeUqZgTYxG"
    );
  };

  return (
    <div className=" d-flex align-items-center justify-content-center flex-wrap pb-5">
      <Container>
        <form
          ref={fromRef}
          onSubmit={submitValue}
          className=" w-100 shadow  mx-auto text-center gap-3"
        >
          <h1 className=" text-center mb-4">Email-js</h1>
          <div className=" d-flex justify-content-lg-between justify-content-center w-100 gap-2 flex-wrap">
            <div className=" d-flex align-items-center gap-3 justify-content-between">
              <label className=" ff-poppins fw-medium fs-28 lh-28 clr-black">
                Name
              </label>
              <input
                required
                name="Name"
                value={inputValue.Name}
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
                className="ff-poppins fw-medium fs-18 lh-28 clr-black inputbox2"
              />
            </div>
            <div className=" d-flex align-items-center gap-3 justify-content-between">
              <label className=" ff-poppins fw-medium fs-28 lh-28 clr-black">
                Email
              </label>
              <input
                required
                name="Email"
                value={inputValue.Email}
                type="email"
                onChange={handleChange}
                placeholder="Enter Mail-Id"
                className="ff-poppins fw-medium fs-18 lh-28 clr-black inputbox2"
              />
            </div>
          </div>
          <button className="mt-5 submitbtn fw-bold fs-16" type="submit">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Mail;
