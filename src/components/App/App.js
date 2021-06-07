import "./App.css";
import React, { useState } from "react";
import { HeaderImage, TodoList } from "../index";
import randomWords from "random-words";
import Card from "@material-ui/core/Card";
import rainbow from "../../images/rainbow.png";
import Button from '@material-ui/core/Button';

let todos = [];

for (var i = 0; i < 10; i++) {
  todos.push({
    id: i,
    title: randomWords({ exactly: 1, wordsPerString: 3 })[0],
    location: randomWords(),
    dueDate: Math.floor(Math.random() * 1000000000),
    done: Math.random() < 0.5,
  });
}

function App() {
  const [items, setItems] = useState(todos);
  const [formDisplay, setFormDisplay] = useState(false);
  const [rainbowBackground, setRainbowBackground] = useState(true);

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
    setItems([...tempItems]);
  };

  const toggleRainbow = () => {
    setRainbowBackground(!rainbowBackground);
  };

  return (
    <div className={rainbowBackground ? "rainbow-background" : "white-background"}>
      <div className="App">
        <Card className="root">
          <HeaderImage
            items={items}
            formDisplay={formDisplay}
            toggleForm={toggleForm}
            addTodo={addTodo}
          />
          <input type="image" alt="rainbow background toggle" className="rainbow-button" src={rainbow} onClick={toggleRainbow} />
          {/* <img src={rainbow} alt="tiny rainbow" className="rainbow-button" /> */}
          <h1>Do these things:</h1>
          <TodoList items={items} changeCheckbox={handleCheckboxChange} />
        </Card>
      </div>
    </div>
  );
}

export default App;
