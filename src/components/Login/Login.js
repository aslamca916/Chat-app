import {
  emptyCheck,
  emailValidation,
  userExistsInStorage,
} from "../../services/validation";
import { getData, setData } from "../../services/storage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // useEffect(()=>{
  //   setInputValues([])
  // })

  const loginUser = (e) => {
    e.preventDefault();
    const users = getData("users");
    // const email = document.querySelector("#email").value;
    // const password = document.querySelector("#password").value;

    if (
      emptyCheck(inputValues.email, "Email") &&
      emailValidation(inputValues.email) &&
      userExistsInStorage(inputValues.email) &&
      emptyCheck(inputValues.password, "Password")
    ) {
      let loggedInUser = users.filter(
        (user) =>
          user.email == inputValues.email &&
          user.password == inputValues.password
      );
      if (loggedInUser.length > 0) {
        setData("loggedinUser", loggedInUser);

        navigate("/login-success");

        return true;
      }else{
        alert("Password is incorrect");
        return false;
      }

      
      // document.getElementById("email").value = "";

      // document.getElementById("password").value = "";

      
    } else {
      return false;
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <div className="container register-container">
        <form onSubmit={loginUser}>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
