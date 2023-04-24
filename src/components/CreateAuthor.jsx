import React, { useState } from "react";
import servicesModule from "../services/Services.js";
import { useNavigate } from "react-router-dom";
const CreateAuthor = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [bDate, setBDate] = useState("");
  const navigate = useNavigate();
  const addAuthor = async (payload) => {
    try {
      const data = await servicesModule.addAuthor(payload);
      if (data.data.data.errors) {
        alert("something went wrong");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("herer", error);
    }
    // if (data.data.added) {
    //   navigate("/");
    // } else {
    //   console.log(data.data.errors);
    //   alert("something went wrong", data.data);
    // }
  };
  const addAuthorHandler = () => {
    const payload = {
      first_name: fName,
      last_name: lName,
      email,
      birthdate: bDate,
    };
    console.log("add author handler", payload);
    addAuthor(payload);
  };
  return (
    <>
      <div className="w-100 mt-5 d-flex justify-content-center align-item-center">
        <div className="w-50">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              firstname
            </span>
            <input
              type="fname"
              className="form-control"
              placeholder="fname"
              aria-label="fname"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              lastname
            </span>
            <input
              type="lname"
              className="form-control"
              placeholder="lname"
              aria-label="lname"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              birthdate
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="bdate"
              aria-label="bdate"
              value={bDate}
              onChange={(e) => setBDate(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addAuthorHandler}
          >
            add author
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAuthor;
