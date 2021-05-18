import "./App.css";
import React from "react";
import { HeaderImage, TodoList } from '../index';
// import HeaderImage from "./components/HeaderImage";
// import TodoList from "./components/TodoList";

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
  }

  render() {

    let items = this.state.items;

    return (
      <div>
        <HeaderImage
          items={this.state.items}
          formDisplay={this.state.formDisplay}
          toggleForm={this.toggleForm}
          addTodo={this.addTodo}
        />
        <TodoList
          items={items}
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
