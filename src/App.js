import "./App.css";
import React from "react";
import HeaderImage from './components/HeaderImage';
import TodoList from './components/TodoList';

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
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(item) {
    let tempItems = this.state.items;
    tempItems[item.id].done = !tempItems[item.id].done;

    this.setState({
      items: tempItems,
    });
  }

  render() {
    return (
      <div>
        <HeaderImage items={this.state.items} />
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
