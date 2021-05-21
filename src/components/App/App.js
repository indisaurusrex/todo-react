import "./App.css";
import React, { useState } from "react";
import { HeaderImage, TodoList } from "../index";

let todos = [
  {
    id: 0,
    title: "Get a hair cut",
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
  {
    id: 2,
    title: "Run the show",
    location: "living room",
    dueTime: "10:03",
    dueDate: "31052021",
    done: false,
  },
  {
    id: 3,
    title: "Join the party",
    location: "balcony",
    dueTime: "19:00",
    dueDate: "31052021",
    done: false,
  },
];

function App() {
  const [items, setItems] = useState(todos);
  const [formDisplay, setFormDisplay] = useState(false);

  const findNextId = () => {
    const newId = Math.max.apply(
      Math,
      items.map(function (o) {
        return o.id;
      })
    );
    return newId + 1;
  };

  const handleCheckboxChange = (item) => {
    let checkedItems = items;
    checkedItems[item.id].done = !item.done;
    setItems([...checkedItems]);
  };
  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  };
  const addTodo = (item) => {
    let tempItems = items;
    item.id = findNextId();
    item.done = false;
    tempItems.push(item);
    setItems(tempItems);
  };

  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <HeaderImage
        items={items}
        formDisplay={formDisplay}
        toggleForm={toggleForm}
        addTodo={addTodo}
      />
      <TodoList items={items} changeCheckbox={handleCheckboxChange} />
    </div>
  );
}

export default App;
