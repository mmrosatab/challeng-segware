import axios from "axios";
import { getTokenLocalStorage } from "./context/LocalStoreProvider";
const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";
const URL_SIGN_UP = "https://segware-book-api.segware.io/api/sign-up";
const URL_FEEDS = "https://segware-book-api.segware.io/api/feeds";
const URL_FEED = "https://segware-book-api.segware.io/api/feed";
const URL_REACTION = "https://segware-book-api.segware.io/api/reaction";

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

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function feedRequest(content) {
  try {
    const token = getTokenLocalStorage();
    const message = { content };
    const request = await axios.post(URL_FEED, message, {
      headers: {
        Authorization: token,
      },
    });

    return request.status;
  } catch (error) {
    return null;
  }
}

export async function likeRequest(feedId, like) {
  try {
    const token = getTokenLocalStorage();
    const message = { feedId, like };

    const request = await axios.post(URL_REACTION, message, {
      headers: {
        Authorization: token,
      },
    });

    return request.status;
  } catch (error) {
    return null;
  }
}

export async function loveRequest(feedId, love) {
  try {
    const token = getTokenLocalStorage();
    const message = { feedId, love };
    const request = await axios.post(URL_REACTION, message, {
      headers: {
        Authorization: token,
      },
    });

    return request.status;
  } catch (error) {
    return null;
  }
}
