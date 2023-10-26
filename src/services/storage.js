/**
 *
 * @param {string} storageVar
 * @returns {Array} data
 * Get data
 */
export function getData(storageVar) {
  const data = localStorage.getItem(storageVar)
    ? JSON.parse(localStorage.getItem(storageVar))
    : [];
  return data;
}

/**
 *
 * @param {string} storageVar
 * @param {string} value
 * @returns boolean
 * Store data in localstorage
 */
export function setData(storageVar, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(storageVar, jsonData);
  return true;
}

/**
 *
 * @returns {Array} data
 * Get logged in user
 */
export function getLoggedInUser() {
  const data = localStorage.getItem("loggedinUser")
    ? JSON.parse(localStorage.getItem("loggedinUser"))
    : [];
  return data;
}
