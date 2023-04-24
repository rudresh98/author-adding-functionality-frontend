import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const date = new Date(props.added).toUTCString();
  const id = props.id;
  const ondeleteHandler = () => {
    props.onClick(id);
  };
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate("/author/" + id);
  };

  return (
    <>
      <div className="card w-50">
        <div className="card-header">author</div>
        <div className="card-body">
          <h5 className="card-title">
            {props.first_name} {props.last_name}
          </h5>
          <p className="card-text">{props.email}</p>
          <div className="d-flex justify-content-end align-items-center">
            {props.delete && (
              <button className="btn btn-primary" onClick={ondeleteHandler}>
                Delete
              </button>
            )}
            {props.details && (
              <button
                className="btn btn-primary mx-3"
                onClick={onNavigateHandler}
              >
                Details
              </button>
            )}
          </div>
          <p className="mx-4">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
