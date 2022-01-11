export function setTokenLocalStorage(token) {
  localStorage.setItem("token", `Bearer ${token}`);
}

export function removeTokenLocalStorage() {
  localStorage.removeItem("token");
}

export function getTokenLocalStorage() {
  return localStorage.getItem("token");
}

export const userIsAuthenticated = getTokenLocalStorage() !== null;

export function setUsernameLocalStorage(username) {
  localStorage.setItem("username", username);
}

export function removeUsernameLocalStorage() {
  localStorage.removeItem("username");
}

export function getUsernameLocalStorage() {
  return localStorage.getItem("username");
}
