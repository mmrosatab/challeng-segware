import MockAdapter from "axios";
import axios from "./axios";

const instance = new MockAdapter(axios, { delayResponse: 0 });
export default instance;
