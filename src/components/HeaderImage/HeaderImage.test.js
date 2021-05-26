import React from "react";
import { HeaderImage } from "../index";
import { render, fireEvent, screen, getByText, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

// test the progress is accurate when you add a new item
// test the progress is accurate with the initial props passed in
const basicItems = [
  {
    id: 1,
    title: "thing1",
    location: "there",
    dueDate: "31-05-2021",
    dueTime: "1400",
    done: true,
  },
  {
    id: 2,
    title: "thing2",
    location: "here",
    dueDate: "31-05-2021",
    dueTime: "1300",
    done: true,
  },
  {
    id: 3,
    title: "thing3",
    location: "there",
    dueDate: "31-05-2021",
    dueTime: "0900",
    done: false,
  },
  {
    id: 4,
    title: "thing4",
    location: "here",
    dueDate: "31-05-2021",
    dueTime: "1000",
    done: false,
  },
];

it("knows how much progress has been made", () => {
  render(<HeaderImage items={basicItems} />)
  expect(screen.getByRole('header-progress')).toHaveTextContent(50 + '% done')
});

// this test isn't working, how do you get the async and buttons to work?

// it("recalculates the progress when a new todo is added", async () => {
//   render(<HeaderImage items={basicItems} />)
//   fireEvent.click(screen.getByText('Add an item'))
//   await waitFor(() => fireEvent.click(screen.getByText('Go!')))
//   expect(screen.getByRole('header-progress')).toHaveTextContent(50 + '%')
// });
