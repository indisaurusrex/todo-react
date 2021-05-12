import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders app header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>ToDo List App</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
