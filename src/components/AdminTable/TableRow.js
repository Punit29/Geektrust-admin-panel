import React from "react";
import { useState } from "react";
import { FiEdit, FiSave, FiTrash } from "react-icons/fi";

const TableRow = ({
  user,
  selectedRows,
  handleRowSelect,
  handleDeleteRow,
  shouldShowEditModal,
  setShouldShowEditModal,
  handleUpdateRowModal,
}) => {
  const { id, name, email, role } = user;
  const [updatedUser, setUpdatedUser] = useState({
    id: id,
    name: name,
    email: email,
    role: role,
  });

  return (
    <tr
      role="row"
      className={`tablerow ${selectedRows?.includes(user) ? "selected" : ""}`}
    >
      <td>
        <input
          data-testid="select-row-checkBox"
          type="checkbox"
          checked={selectedRows?.includes(user) ? true : false}
          onChange={() => handleRowSelect(user)}
        />
      </td>

      {shouldShowEditModal?.isModalOpen &&
      shouldShowEditModal?.user.id === id ? (
        <>
          <td>
            <input
              className="tablerow-input"
              type="text"
              defaultValue={name}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  name: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="tablerow-input input-name"
              type="text"
              defaultValue={email}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  email: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="tablerow-input input-role"
              type="text"
              defaultValue={role}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  role: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
        </>
      )}

      <td>
        <div className="tablerow-action-btns">
          {shouldShowEditModal?.isModalOpen &&
          shouldShowEditModal?.user?.id === id ? (
            <span
              className="tablerow-btn edit"
              onClick={() => {
                handleUpdateRowModal(updatedUser);
              }}
              role="button"
            >
              <FiSave className="icon icon-save" />
            </span>
          ) : (
            <span
              className="tablerow-btn btn-edit"
              onClick={() => {
                setShouldShowEditModal({
                  isModalOpen: true,
                  user: user,
                });
              }}
              role="button"
              data-testid="edit-row-button"
            >
              <FiEdit className="icon icon-edit" />
            </span>
          )}
          <span
            className="tablerow-btn btn-delete"
            role="button"
            data-testid="delete-row-button"
            onClick={() => handleDeleteRow(user)}
          >
            <FiTrash className="icon icon-delete" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;