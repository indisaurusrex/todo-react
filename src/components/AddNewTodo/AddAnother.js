import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

const AddTodoForm = (props) => {
  return (
    <div className="card-body" id="add-todo-card">
      <Formik
        initialValues={{ title: "", location: "", dueDate: "", dueTime: "" }}
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
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div style={{ padding: "10px" }}></div>
            <input
              type="text"
              name="title"
              onChange={props.handleChange}
              placeholder="What is it?"
            />
            <ErrorMessage name="title" component="div" />
            <div style={{ padding: "10px" }}></div>
            <input
              type="text"
              name="location"
              onChange={props.handleChange}
              placeholder="Where is it?"
            />
            <ErrorMessage name="location" component="div" />
            <div style={{ padding: "10px" }}></div>
            <input type="date" name="dueDate" onChange={props.handleChange} />
            <ErrorMessage name="dueDate" component="div" />
            <div style={{ padding: "10px" }}></div>
            <input type="time" name="dueTime" onChange={props.handleChange} />
            <ErrorMessage name="dueTime" component="div" />
            <div style={{ padding: "10px" }}></div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTodoForm;
