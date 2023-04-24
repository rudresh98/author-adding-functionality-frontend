import React, { useState, useEffect, useCallback } from "react";
import Card from "../Shared/Card";
import servicesModule from "./../services/Services";
import { useNavigate } from "react-router-dom";
const Author = () => {
  const [authors, setAuthors] = useState([1, 2, 3]);
  const [authorid, setAuthorId] = useState(0);
  const navigate = useNavigate();
  const getAuthorData = useCallback(async () => {
    const data = await servicesModule.allAuthors();
    console.log(data.data);
    setAuthors(data.data);
  }, [setAuthors]);

  const onDeleteAuthor = async (id) => {
    const data = await servicesModule.deleteAuthor(id);
    if (data) {
      alert("no data availabled");
    }
  };

  const deleteHandler = (id) => {
    console.log(id);
    setAuthorId(id);
    // navigate("/create-author");
    onDeleteAuthor(id);
    console.log("parent delete");
    getAuthorData();
  };
  useEffect(() => {
    console.log("use effect");
    getAuthorData();
  }, [getAuthorData, authorid]);
  return (
    <div>
      <p className="d-flex justify-content-center align-items-center mt-4">
        Author List
      </p>
      <div className="mt-4 container">
        <div className="row ">
          {authors &&
            authors.map((ele) => (
              <Card
                key={ele.id}
                id={ele.id}
                birthdate={ele.birthdate}
                email={ele.email}
                last_name={ele.last_name}
                first_name={ele.first_name}
                added={ele.added}
                onClick={deleteHandler}
                delete={true}
                details={true}
              />
            ))}
        </div>

        {!authors && <p>no author available</p>}
      </div>
    </div>
  );
};

export default Author;
