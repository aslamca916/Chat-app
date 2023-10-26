import "./Userslist.css";
import { getData } from "../../services/storage";
import { Link } from "react-router-dom";
import UserEdit from "../UserEdit/UserEdit";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";

function Userlist() {
  const [users,setUsers] = useState([]);
  const [loggedinUser, setLoggedinUser] = useState([]);

  useEffect(() => {
    const data = getData("users");
    console.log("Users=", data);
    setUsers(data)
  }, []);

  useEffect(()=>{
    const loggedInUser = getData("loggedinUser");
    console.log("Logged in user=",loggedInUser);
    setLoggedinUser(loggedInUser);
  },[])

  const deleteUser = (id)=>{
   
  }

  return (
    <div className="container">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {console.log("username", user.username)}

              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user-edit/${user.id}`}>Edit</Link>{" "}
                {loggedinUser[0].id !== user.id && <Link to={"javascript:void(0)"} data-bs-toggle="modal" data-bs-target="#deleteModal" >| Delete</Link> }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Confirm User Deletion
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure?<br />
            Deleting User will remove all the Chats and Documents uploaded by
            the User
          </div>
          <div class="modal-footer">
            <button
              id="closeModal"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" id="delete" class="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Userlist;

