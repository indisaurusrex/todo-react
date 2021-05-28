import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddTodoForm from './AddAnother';

function AddNewTodo(props) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const tempTodo = {
      title: title,
      location: location,
      dueDate: dueDate,
      dueTime: dueTime,
    };

    props.addTodo(tempTodo);

    setTitle("");
    setLocation("");
    setDueDate("");
    setDueTime("");

    props.toggleForm();
  };



  return (
    <div>
      <div
        className={
          "card textcenter mt-3 " + (props.formDisplay ? "" : "add-appointment")
        }
      >
        <Button
          size="small"
          startIcon={<AddCircleIcon />}
          onClick={props.toggleForm}
        >
          Add an item
        </Button>
        <AddTodoForm />
      </div>
    </div>
  );
}

export default AddNewTodo;
