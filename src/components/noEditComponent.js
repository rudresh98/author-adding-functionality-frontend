import React from "react";
import Card from "../Shared/Card";

const NoEditComponent = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card
        key={props.id}
        id={props.id}
        birthdate={props.birthdate}
        email={props.email}
        last_name={props.last_name}
        first_name={props.first_name}
        added={props.added}
      />
    </div>
  );
};

export default NoEditComponent;
