import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./Login";

Enzyme.configure({ adapter: new Adapter() });


describe("Login component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test("should render <Login /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("should renders two input component", () => {
    expect(wrapper.find("input")).toHaveLength(2);
    
  });
});
