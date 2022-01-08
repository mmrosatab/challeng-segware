import axios from "axios";
const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";

export function setTokenLocalStorage(token) {
  localStorage.setItem("token", `Bearer ${token}`);
}

export function removeTokenLocalStorage() {
  localStorage.removeItem("token");
}

export function getTokenLocalStorage() {
  localStorage.getItem("token");
}

export async function LoginRequest(username, password) {
  try {
    const request = await axios.post(URL_SIGN_IN, { username, password });
    return request.data;
  } catch (error) {
    return null;
  }
}
