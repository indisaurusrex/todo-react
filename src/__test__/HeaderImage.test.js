import React from 'react';
import { mount, shallow } from 'enzyme';
import HeaderImage from '../components/HeaderImage';

it("knows how much progress has been made", () => {
    const items = [
        { id: 1, title: "thing1", location: "there", dueDate: "31-05-2021", dueTime: "1400", done: true }, 
        { id: 1, title: "thing2", location: "here", dueDate: "31-05-2021", dueTime: "1300", done: true },
        { id: 1, title: "thing3", location: "there", dueDate: "31-05-2021", dueTime: "0900", done: false },
        { id: 1, title: "thing4", location: "here", dueDate: "31-05-2021", dueTime: "1000", done: false }
    ];

})