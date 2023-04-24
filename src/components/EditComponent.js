import React, { useCallback, useEffect, useState } from "react";

const EditComponent = (props) => {
  const [fname, setFname] = useState(props.first_name);
  const [lname, setLname] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [birthdate, setBirthDate] = useState(props.birthdate);

  /**
   * submit handler is responsible for passing data to parent component for api call
   */

  const onSubmitHandler = useCallback(() => {
    const payload = {
      first_name: fname,
      last_name: lname,
      id: props.id,
      email,
      birthdate,
    };
    props.editHandler(payload);
  }, [fname, lname, props, email, birthdate]);
  useEffect(() => {
    console.log("useffect");
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="w-100">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  firsname
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  lastname
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={lname}
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
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
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
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={birthdate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button
              className="btn btn-outline-primary"
              onClick={onSubmitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
