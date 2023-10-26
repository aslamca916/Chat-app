import { getData, setData } from "../../services/storage";
import {
  emptyCheck,
  emailValidation,
  alreadyExistingUser,
  checkEmailExist,
  userExistsInStorage,
  passwordMatchValidation,
} from "../../services/validation";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  let users = getData("users");

  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emptyCheck(inputValues.username, "Fullname") &&
      emptyCheck(inputValues.email, "Email") &&
      emailValidation(inputValues.email) &&
      alreadyExistingUser(inputValues.email) &&
      emptyCheck(inputValues.password, "Password") &&
      emptyCheck(inputValues.cpassword, "Confirm Password") &&
      passwordMatchValidation(inputValues.password, inputValues.cpassword)
    ) {
      let user = {
        id: Number(new Date()),
        username: inputValues.username,
        email: inputValues.email,
        password: inputValues.password,
      };
      users.push(user);
      setData("users", users);
      navigate("/register-success");
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <h4>Register</h4>
      <div className="container register-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={(e) =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={(e) =>
                setInputValues({ ...inputValues, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) =>
                setInputValues({ ...inputValues, password: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={(e) =>
                setInputValues({ ...inputValues, cpassword: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

// const navigate = useNavigate();
// let users = getData("users");
// function registerUser(e) {
//   e.preventDefault();
//   const fullname = document.querySelector("#fullname").value;
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password").value;
//   const cpassword = document.querySelector("#cpassword").value;

//   if (
//     emptyCheck(fullname, "Fullname") &&
//     emptyCheck(email, "Email") &&
//     emailValidation(email) &&
//     alreadyExistingUser(email) &&
//     emptyCheck(password, "Password") &&
//     emptyCheck(cpassword, "Confirm Password") &&
//     passwordMatchValidation(password, cpassword)
//   ) {
//     let user = {
//       id: Number(new Date()),
//       username: fullname,
//       email: email,
//       password: password,
//     };
//     users.push(user);
//     setData("users", users);
//     navigate("/register-success");
//   }else {
//       return false;
//   }
// }
