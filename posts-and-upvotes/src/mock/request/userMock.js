import mock from "./mock";

mock.onPost("/sign-in").replay(200, { username: "string", password: "string" });
