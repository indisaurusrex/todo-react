import "./App.css";
import React from "react";
import sun from "./sunandclouds.jpeg";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Paper from "@material-ui/core/Paper";

let todos = [
  {
    title: "Get a hair cut",
    location: "hair dressers",
    dueTime: "0900",
    dueDate: "31052021",
    done: true,
  },
  {
    title: "Do the dishes",
    location: "kitchen",
    dueTime: "1300",
    dueDate: "31052021",
    done: false,
  },
  {
    title: "Run the show",
    location: "living room",
    dueTime: "1003",
    dueDate: "31052021",
    done: false,
  },
  {
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
    return (
      <div id="progress-in-header" className="flex-item">
        <p>50% done</p>
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
          width: "100%",
          height: "10em",
        }}
      >
        <AddNewTodo />
        <Progress />
        <Date />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const rows = [];

    this.props.items.forEach((item) => {
      rows.push(<TodoItem item={item} />);
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <Paper elevation={3} style={{ width: "150%" }}>
                <div className="todo-item-container">
                  <div className="flex-item">
                    <th>Title</th>
                  </div>
                  <div className="flex-item">
                    <th>Location</th>
                  </div>
                  <div className="flex-item">
                    <th>Due</th>
                  </div>
                </div>
              </Paper>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <tr>
        <Paper elevation={3} style={{ width: '150%' }}>
          <div className="todo-item-container" style={{ height: '40px' }}>
            <div className="flex-item">{item.title}</div>
            <div className="flex-item">{item.location}</div>
            <div className="flex-item">{item.dueTime}</div>
          </div>
        </Paper>
      </tr>
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
