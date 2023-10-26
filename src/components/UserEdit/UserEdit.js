import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData, setData } from "../../services/storage";
import { getUser } from "../../services/user";
import { emptyCheck, emailValidation, checkEmailExist } from "../../services/validation";

function UserEdit() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    debugger
    let usersList = getData("users");
    setUsers(usersList);
    console.log("Users inside useEffect",users)

    const userData = getUser(userId);
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      emptyCheck(user.username, "Fullname") &&
      emailValidation(user.email) &&
      checkEmailExist(user.email, userId) &&
      emptyCheck(user.username, "Fullname")
    ) {
      debugger;
      console.log("Usersinside componnet",users)
      let userIndex = users.findIndex((user) => user.id == userId);

      if (userIndex !== -1) {
        users[userIndex].username = user.username;
        users[userIndex].email = user.email;
        setData("users", users);
        navigate('/userlist')
      }
    }
  }

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Fullname</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  };


export default UserEdit;
