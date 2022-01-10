import axios from "axios";
import { getTokenLocalStorage } from "./context/LocalStoreProvider";
const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";
const URL_SIGN_UP = "https://segware-book-api.segware.io/api/sign-up";
// const URL_FEED = "https://segware-book-api.segware.io/api/feed";
const URL_FEEDS = "https://segware-book-api.segware.io/api/feeds";
// const URL_REACTION = "https://segware-book-api.segware.io/api/reaction";

export async function signInRequest(username, password) {
  try {
    const request = await axios.post(URL_SIGN_IN, { username, password });
    return request.data;
  } catch (error) {
    return null;
  }
}

export async function signUpRequest(username, password) {
  try {
    const request = await axios.post(URL_SIGN_UP, { username, password });
    return request.status;
  } catch (error) {
    return null;
  }
}

export async function forgotPasswordRequest(username) {
  const URL = `https://segware-book-api.segware.io/api/forgot-password/${username}`;

  try {
    const request = await axios.get(URL, { username });
    return request.data;
  } catch (error) {
    return null;
  }
}

export async function feedsRequest() {
  try {
    const token = getTokenLocalStorage();

    const request = await axios.get(URL_FEEDS, {
      headers: {
        Authorization: token,
      },
    });

    console.log(request);
    console.log(request.data);
    return request.data;
  } catch (error) {
    return null;
  }
}
