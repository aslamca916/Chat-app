import { getData } from "./storage";

// const users = getData();

export function getUser(uid) {
    console.log("Inside getUser()");
    console.log("Id =()",uid);
    const users = getData("users");
    console.log("Users=",users);
    debugger
    const result = users.filter((user) => user.id == uid)
      
    console.log("User=",result);
    return result[0];
  }