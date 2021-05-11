import "./App.css";
import React from "react";
import HeaderImage from "./components/HeaderImage";
import TodoList from "./components/TodoList";

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
    done: true,
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
  constructor(props) {
    super(props);
    this.state = {
      items: todos,
      formDisplay: false,
      uniqueId: 0,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  findNextId() {
    let newId = Math.max.apply(Math, this.state.items.map(function(o) { return o.id; }))
    return newId + 1;
  }

  handleCheckboxChange(item) {
    let tempItems = this.state.items;
    tempItems[item.id].done = !tempItems[item.id].done;

    this.setState({
      items: tempItems,
    });

    console.log(this.state.items);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
  }

  addTodo(item) {
    let tempItems = this.state.items;
    item.id = this.findNextId();
    item.done = false;
    tempItems.push(item);
    this.setState({
      items: tempItems
    });
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
        <HeaderImage
          items={this.state.items}
          formDisplay={this.state.formDisplay}
          toggleForm={this.toggleForm}
          addTodo={this.addTodo}
        />
        <TodoList
          items={this.state.items}
          changeCheckbox={this.handleCheckboxChange}
        />
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
