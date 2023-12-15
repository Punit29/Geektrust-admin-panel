import React from "react";
import { FadeLoader } from "react-spinners";

const Alert = ({ alertType, alertMessage }) => {
  return (
    <>
      <div className="alert-container">
        {alertType === "loading" && (
          <div className="alert-loading-wrapper">
            <FadeLoader color="#808080" />
            <p className="alert-text loading">{alertMessage} </p>
          </div>
        )}
        {alertType === "error" && (
          <p className="alert-text error">
            Something went wrong : {alertMessage}
          </p>
        )}
        {alertType === "notFound" && (
          <p className="alert-text notFound">{alertMessage} </p>
        )}
      </div>
    </>
  );
};

export default Alert;