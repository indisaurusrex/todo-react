import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddTodoForm = () => {
  return (
    <div className="card-body" id="add-todo-card">
      <Formik
        initialValues={{ title: "", location: "", dueDate: "", dueTime: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
            <Form>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
                <Field type="text" name="location" />
                <ErrorMessage name="location" component="div" />
                <Field type="date" name="dueDate" />
                <ErrorMessage name="dueDate" component="div" />
                <Field type="time" name="dueTime" />
                <ErrorMessage name="dueTime" component="div" />
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTodoForm;