import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
        <div className="card-body" id="add-todo-card">
          <form id="aptForm" noValidate onSubmit={handleAdd}>
            <div className="form-group form-row">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="What is it?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Where is it?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="dueDate"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className="col-md-4 form-row">
                <input
                  type="time"
                  className="form-control"
                  name="dueTime"
                  id="dueTime"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <Button
                  type="submit"
                  size="small"
                  startIcon={<AddCircleIcon />}
                >
                  Go!
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewTodo;
