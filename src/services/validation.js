import { getData, setData,getLoggedInUser } from "./storage";

/**
 *
 * @param {string} field
 * @param {string} errorFieldName
 * @returns boolean
 * Empty validation check
 */
export function emptyCheck(field, errorFieldName) {
  
  console.log("abcd",field)
  if (field == "" || typeof field === "undefined") {
    alert("Please enter " + errorFieldName);
    return false;
  }
  return true;
}

/**
 *
 * @param {string} email
 * @returns boolean
 * Email validation using regular expression
 */
export function emailValidation(email) {
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const result = emailRegex.test(email);
  if (!result) {
    alert("Invalid email address!");
    return false;
  }
  return true;
}

/**
 *
 * @param {string} email
 * @returns boolean
 * Checking email already exists while register
 */
export function alreadyExistingUser(email) {
  const users = getData("users");
  if (users) {
    const obj = users.find((user) => user.email === email);
    if (obj) {
      alert("Email already exist");
      return false;
    }
    return true;
  }
  return true;
}

/**
 *
 * @param {string} email
 * @param {string} userId
 * @returns boolean
 * Check email already exists while edit a user
 */
export function checkEmailExist(email, userId) {
  let users = getData("users");

  const emailExists = users.filter((user) => {
    return user.email === email && user.id != userId;
  });
  debugger
  console.log(email, userId, users, emailExists);
  if (emailExists.length > 0) {
    alert("Email already exist");
    return false;
  }
  return true;
}

/**
 *
 * @param {string} email
 * @returns boolean
 * Checking email exists or not in local storage
 */
export function userExistsInStorage(email) {
  const users = getData("users");
  if (users) {
    const obj = users.find((user) => user.email === email);
    if (obj) {
      return true;
    } else {
      alert("Email doesn't exist");
      return false;
    }
  }
  alert("Email doesn't exist");
  return false;
}

/**
 *
 * @param {string} password
 * @param {string} confirmPassword
 * @returns boolean
 * Check password and confirm password
 */
export function passwordMatchValidation(password, confirmPassword) {
  if (password != confirmPassword) {
    alert("Password and Confirm Password are not same");
    return false;
  }
  return true;
}
