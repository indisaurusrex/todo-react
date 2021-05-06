import "./App.css";
import React, { Component } from "react";

let todos = [
  {"title": "Get a hair cut", "location": "hair dressers", "dueTime": "0900", "dueDate": "31052021", "done": true},
  {"title": "Do the dishes", "location": "kitchen", "dueTime": "1300", "dueDate": "31052021", "done": false},
  {"title": "Run the show", "location": "living room", "dueTime": "1003", "dueDate": "31052021", "done": false},
  {"title": "Join the party", "location": "balcony", "dueTime": "1900", "dueDate": "31052021", "done": false}
];


class MainBackground extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <HeaderImage />
        <Date />
        <AddNewTodo />
        <Progress />
        <TodoList items={todos}/>
      </div>
    )
  }
}

class Progress extends React.Component {
  render() {
    return(
      <p>Progress goes here</p>
    )
  }
}

class Date extends React.Component {
  render() {
    return (
      <p>Tues 8th May</p>
    );
  }
}

class AddNewTodo extends React.Component {
  render() {
    return (
      <button>Add new item</button>
    )
  }
}

class HeaderImage extends React.Component {
  render() {
    return (
      <img />
    )
  }
}

class TodoList extends React.Component {
  render() {

    const rows = [];

    this.props.items.forEach((item) => {
      rows.push(<TodoItem item={item} />)
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
    )
  }
}

class TodoItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.dueTime}</td>
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
