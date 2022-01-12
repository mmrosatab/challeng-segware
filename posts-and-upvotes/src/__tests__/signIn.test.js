// import SignIn from "../../src/pages/SignIn";
// import "@testing-library/jest-dom";
// import * as React from "react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { render, fireEvent, screen } from "@testing-library/react";

// const URL_SIGN_IN = "https://segware-book-api.segware.io/api/sign-in";

// const fakeUserResponse = { token: "fake_user_token" };

// const server = setupServer(
//   rest.post(URL_SIGN_IN, (req, res, ctx) => {
//     return res(ctx.json(fakeUserResponse));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   localStorage.removeItem("token");
// });
// afterAll(() => server.close());

// test("allows the user to login successfully", async () => {
//   render(<SignIn />);

//   fireEvent.change(screen.getByLabelText(/username/i), {
//     target: { value: "string" },
//   });
//   fireEvent.change(screen.getByLabelText(/password/i), {
//     target: { value: "string" },
//   });

//   fireEvent.click(screen.getByText(/submit/i));

//   const alert = await screen.findByRole("alert");
//   expect(alert).toHaveTextContent(/congrats/i);
//   expect(window.localStorage.getItem("token")).toEqual(fakeUserResponse.token);
// });
