import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import serviceModule from "../services/Services";
import EditComponent from "./EditComponent";
import NoEditComponent from "./noEditComponent";
const Authordetails = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [authorData, setAuthorData] = useState({});
  const navigate = useNavigate();
  /**
   * get author details with us associated id
   */
  const getAuthorDetails = useCallback(async () => {
    const data = await serviceModule.authorDetails(id);
    setAuthorData(data.data);
  }, [id]);
  /** toogle ui for edit functionality */
  const onToggleEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  /**
   * to call the api when author details is updated
   */
  const editAuthorDetails = useCallback(
    async (payload) => {
      try {
        const data = await serviceModule.editAuthor(payload);
        console.log(data);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]
  );

  /**
   * calling edit function when use visit this page
   */

  const getEditedAuthorDetails = useCallback(
    (payload) => {
      editAuthorDetails(payload);
    },
    [editAuthorDetails]
  );
  useEffect(() => {
    getAuthorDetails();
  }, [getAuthorDetails, getEditedAuthorDetails]);
  return (
    <>
      <div className="d-flex justify-content-center align-item-center mb-3">
        <button className="btn btn-outline-danger w-25" onClick={onToggleEdit}>
          edit
        </button>
      </div>
      {edit && (
        <EditComponent
          first_name={authorData.first_name}
          last_name={authorData.last_name}
          email={authorData.email}
          id={authorData.id}
          birthdate={authorData.birthdate}
          editHandler={getEditedAuthorDetails}
        />
      )}
      {!edit && (
        <NoEditComponent
          first_name={authorData.first_name}
          last_name={authorData.last_name}
          email={authorData.email}
          added={authorData.added}
        />
      )}
    </>
  );
};

export default Authordetails;
