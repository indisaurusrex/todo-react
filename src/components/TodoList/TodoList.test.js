import '@testing-library/jest-dom';
import React from "react";
import regenerator from 'regenerator-runtime/runtime';
import { TodoList } from "../index";
import { render, screen } from "@testing-library/react";

// sorts the list by time
// sorts the list by done

const todoList = [
  {
    id: 0,
    title: "Get a haircut",
    location: "hair dressers",
    dueTime: "09:00",
    dueDate: "31052021",
    done: true,
  },
  {
    id: 1,
    title: "Do the dishes",
    location: "kitchen",
    dueTime: "13:00",
    dueDate: "31052021",
    done: true,
  },
];

// test("shows the titles of the todos in the list", async () => {
//   render(<TodoList items={todoList}/>);
//   const titleone = screen.getByText(/Do the dishes/);
//   const titletwo = screen.getByText(/Get a haircut/);
//   expect(titleone).toBeInTheDocument();
//   expect(titletwo).toBeInTheDocument();

// });

// test("has 3 rows in the table when there are 2 items in the list", async () => {
//     render(<TodoList items={todoList} />);
//     const list = screen.getAllByRole('row');
//     expect(list.length).toBe(3);
// });
