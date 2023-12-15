import React from "react";

const DeleteSelectedButton = ({ handleDeleteSelected, selectedRows }) => {
  return (
    <button
      className="btn-delete-selected"
      onClick={() => handleDeleteSelected()}
      disabled={selectedRows.length > 0 ? false : true}
    >
      Delete Selected
    </button>
  );
};

export default DeleteSelectedButton;