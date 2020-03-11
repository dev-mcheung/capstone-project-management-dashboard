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
      <nav className="level">
        <div className="level-left"></div>
        <div className="level-right">
          <p className="level-item">
            <button className="button is-small is-success">Add User</button>
          </p>
        </div>
      </nav>
      <table className="table is-fullwidth">
        <thead className="thead">
          <tr className="tr">
            <th className="th">User</th>
            <th className="th">Email</th>
            <th className="th">Created On</th>
            <th className="th">Select</th>
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
