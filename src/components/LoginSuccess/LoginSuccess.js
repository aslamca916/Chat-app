import {getLoggedInUser} from '../../services/storage';
function LoginSuccess() {
    debugger
    let loggedInUser = getLoggedInUser();
    console.log("Logged in user=",loggedInUser);
    return ( <div className="container">
        <p>Welcome {loggedInUser[0].username} !!!</p>
    </div> );
}

export default LoginSuccess;


// {document.write(loggedInUser[0].username)}