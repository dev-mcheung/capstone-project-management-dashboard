import React, { useState, useEffect } from "react";
import UserDataService from "../../api/dashboard/UserDataService";

export const ManageUserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserDataService.retrieveUsers().then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <table className="table is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th">User</th>
            <th className="th">Email</th>
            <th className="th">Created On</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {users.map(user => (
            <tr className="tr" key={user.id}>
              <td className="td">{user.username}</td>
              <td className="td">{user.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
