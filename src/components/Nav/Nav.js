import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a href="#" className="navbar-brand">Chat-App</a>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/chats">Chats</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/userlist">Users</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/documents">Documents</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>  );
}

export default Nav;