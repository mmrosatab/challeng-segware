import axios from "axios";
const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";
const URL_SIGN_UP = "https://segware-book-api.segware.io/api/sign-un";
// const URL_FEEDS = "https://segware-book-api.segware.io/api/feeds";
// const URL_FEED = "https://segware-book-api.segware.io/api/feed";
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
    return request.data;
  } catch (error) {
    return null;
  }
}
