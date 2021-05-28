import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Formik, ErrorMessage } from "formik";

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
          <Formik
            initialValues={{
              title: title,
              location: location,
              dueDate: dueDate,
              dueTime: dueTime,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.title) {
                errors.title = "Please provide a title";
              }
              if (!values.location) {
                errors.location = "Please provide a location";
              }
              if (!values.dueDate) {
                errors.dueDate = "Please provide a due date";
              }
              if (!values.dueTime) {
                errors.dueTime = "Please provide a due time";
              }
              return errors;
            }}
          >
            {(props) => (
              <form onSubmit={handleAdd}>
                <div style={{ padding: "10px" }}></div>
                <input
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What is it?"
                />
                <ErrorMessage name="title" component="div" />
                <div style={{ padding: "10px" }}></div>
                <input
                  type="text"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where is it?"
                />
                <ErrorMessage name="location" component="div" />
                <div style={{ padding: "10px" }}></div>
                <input
                  type="date"
                  name="dueDate"
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <ErrorMessage name="dueDate" component="div" />
                <div style={{ padding: "10px" }}></div>
                <input
                  type="time"
                  name="dueTime"
                  onChange={(e) => setDueTime(e.target.value)}
                />
                <ErrorMessage name="dueTime" component="div" />
                <div style={{ padding: "10px" }}></div>
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddNewTodo;
