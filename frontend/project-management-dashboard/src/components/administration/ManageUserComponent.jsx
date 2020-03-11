import React from "react";
import AdministrationPanel from "./AdministrationPanel";

export const ManageUserComponent = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
        </thead>
      </table>
    </>
  );
};
