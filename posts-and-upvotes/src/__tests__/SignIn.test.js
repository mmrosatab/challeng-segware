import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";

configure({ adapter: new Adapter() });

describe("Testing Sign In component", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
