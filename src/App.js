import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import Userlist from "./components/Users-list/Userslist";
import Chat from "./components/Chat/Chat";
import Documents from "./components/Documents/Documents";
import { Routes, Route, withRouter } from "react-router-dom";
import LoginSuccess from "./components/LoginSuccess/LoginSuccess";
import NavbarShowHide from "./components/NavbarShowHide"
import UserEdit from "./components/UserEdit/UserEdit";


function App() {
  // const excludedRoutes = ['/', '/login','/register'];
 
  return (
    <div>
      <NavbarShowHide>
        <Nav />
      </NavbarShowHide>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route index element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/documents" element={<Documents />} />
        <Route path=  "/user-edit/:userId" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;


