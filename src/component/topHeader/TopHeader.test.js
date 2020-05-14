import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TopHeader from "./TopHeader";

Enzyme.configure({ adapter: new Adapter() });

describe("Login component", () => {
  const setup = (props = {}) => {
    return shallow(<TopHeader {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("should render <TopHeader /> component", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-topheader");
    expect(component.length).toBe(1);
  });

  test("should render <TopHeader /> component with two child", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-topheader");
    expect(component.children().length).toBe(2);
  });

  test("should render nav with one child", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-topheader-nav");
    expect(component.children().length).toBe(1)
  });
});
