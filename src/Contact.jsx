import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });
  const inputEv = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <h2 className="text-center">Contact Us</h2>
      <div
        className="row mb-4 d-flex justify-content-center"
        style={{ height: "31rem" }}
      >
        <div className="col-md-9 d-flex justify-content-center mt-3">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                name="fullname"
                onChange={inputEv}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                name="mobile"
                onChange={inputEv}
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={inputEv}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                onChange={inputEv}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
