import React, { useState, useEffect } from "react";
import UserDataService from "../../api/dashboard/UserDataService";
import { useHistory } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ManageUserComponent = () => {
  let history = useHistory();
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
            <button
              className="button is-small is-success"
              onClick={() =>
                history.push("/dashboard/administration/manage-users/add")
              }
            >
              Add User
            </button>
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

export function AddUser() {
  //   const [username, setUsername] = useState(undefined);
  //   const [password, setPassword] = useState(undefined);
  //   const [confirmPassword, setConfirmPassword] = useState(undefined);
  //   const [email, setEmail] = useState(undefined);

  let history = useHistory();
  const passwordSchema = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const createAccountSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username is too short.")
      .max(16, "Username is too long.")
      .required("Cannot be blank."),
    password: Yup.string()
      .matches(
        passwordSchema,
        ` 
            Password must be at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. It can contain special characters.
        `
      )
      .required("Cannot be blank."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must be the same.")
      .required("Confirm the password."),
    emailAddress: Yup.string()
      .email("Invalid email.")
      .required("Cannot be blank.")
  });

  return (
    <div className="container">
      <h1 className="title is-1">Create a new user</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          emailAddress: ""
        }}
        validationSchema={createAccountSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={values =>
          UserDataService.addUser(values).then(response => {
            history.push("/dashboard/administrator/manage-users");
          })
        }
      >
        <Form>
          <fieldset className="field">
            <label className="label">Username</label>
            <Field className="input" type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              className="help is-danger"
            />
          </fieldset>
          <fieldset className="field">
            <label className="label">Password</label>
            <Field className="input" type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              className="help is-danger"
            />
          </fieldset>
          <fieldset className="field">
            <label className="label">Confirm Password</label>
            <Field className="input" type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="help is-danger"
            />
          </fieldset>
          <fieldset className="field">
            <label className="label">Email Address</label>
            <Field className="input" type="email" name="emailAddress" />
            <ErrorMessage
              name="emailAddress"
              component="p"
              className="help is-danger"
            />
          </fieldset>
          <button className="button is-success" type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
}
