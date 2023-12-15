import React from "react";
import { useEffect } from "react";
import TableRow from "./TableRow";
import Alert from "../Alert";

const AdminTable = ({
  handleUpdateRowModal,
  filteredData,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  selectedRows,
  handleRowSelect,
  handleDeleteRow,
  handleAllRowsSelect,
  shouldShowEditModal,
  setShouldShowEditModal,
}) => {
  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData?.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    if (currentRows?.length === 0 && currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  }, [currentRows, currentPage, setCurrentPage]);

  return (
    <div className="admintable-wrapper">
      <div
        className={`admintable-inner-wrapper ${
          currentRows?.length === 0 && "empty"
        }`}
      >
        <table className="admintable">
          <thead>
            <tr role="row">
              <th>
                <input
                  type="checkbox"
                  checked={
                    currentRows?.length > 0 &&
                    currentRows?.every((row) => selectedRows.includes(row))
                  }
                  onChange={() => handleAllRowsSelect(currentRows)}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows?.map((user) => {
              return (
                <TableRow
                  key={user.id}
                  selectedRows={selectedRows}
                  handleRowSelect={handleRowSelect}
                  handleDeleteRow={handleDeleteRow}
                  shouldShowEditModal={shouldShowEditModal}
                  handleUpdateRowModal={handleUpdateRowModal}
                  setShouldShowEditModal={setShouldShowEditModal}
                  user={user}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {currentRows?.length === 0 && (
        <Alert alertType={"notFound"} alertMessage="No data found" />
      )}
    </div>
  );
};

export default AdminTable;