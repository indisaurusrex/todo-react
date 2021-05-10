import "./App.css";
import React from "react";
import sun from "./sunandclouds.jpeg";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

let todos = [
  {
    id: 0,
    title: "Get a hair cut",
    location: "hair dressers",
    dueTime: "0900",
    dueDate: "31052021",
    done: true,
  },
  {
    id: 1,
    title: "Do the dishes",
    location: "kitchen",
    dueTime: "1300",
    dueDate: "31052021",
    done: false,
  },
  {
    id: 2,
    title: "Run the show",
    location: "living room",
    dueTime: "1003",
    dueDate: "31052021",
    done: false,
  },
  {
    id: 3,
    title: "Join the party",
    location: "balcony",
    dueTime: "1900",
    dueDate: "31052021",
    done: false,
  },
];

class MainBackground extends React.Component {
  render() {
    return (
      <div>
        <HeaderImage />
        <TodoList items={todos} />
      </div>
    );
  }
}

class Progress extends React.Component {
  render() {
    let doneCount = 0;

    this.props.items.map((item) => {
      if (item.done === true) {
        doneCount += 1;
      }
    });

    let donePercent = (doneCount / this.props.items.length) * 100;

    return (
      <div id="progress-in-header" className="flex-item">
        <p>{donePercent}% done</p>
      </div>
    );
  }
}

class Date extends React.Component {
  render() {
    return (
      <div id="date-in-header" className="flex-item">
        <p>Tues 4th May</p>
      </div>
    );
  }
}

class AddNewTodo extends React.Component {
  render() {
    return (
      <div id="add-new-todo" className="flex-item">
        <Button variant="contained" size="small" startIcon={<AddCircleIcon />}>
          Add an item
        </Button>
      </div>
    );
  }
}

class HeaderImage extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${sun})`,
          height: "10em",
        }}
      >
        <AddNewTodo />
        <Progress items={todos} />
        <Date />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const rows = [];

    this.props.items.forEach((item) => {
      rows.push(
        <tr>
          <th>{item.title}</th>
          <th>{item.location}</th>
          <th>{item.dueTime}</th>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <MainBackground />
    </div>
  );
}

export default App;
