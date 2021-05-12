import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodoList from '../components/TodoList';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const todos = [{ id: 1, title: "thing", location: "there", dueDate: "31-05-2021", dueTime: "1400", done: false }];
    shallow(<TodoList items={todos} />);
});

it("displays the title of the todo", () => {
    const todos = [{ id: 1, title: "thing", location: "there", dueDate: "31-05-2021", dueTime: "1400", done: false }];
    const wrapper = mount(<TodoList items={todos} />);
    const value = wrapper.find("#title-th").text();
    expect(value).toEqual("thing");
});

