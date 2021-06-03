import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useForm } from "react-hook-form";

function AddNewTodo(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = (data) => {
   
    var date2=new Date(`${data.dueDate} ${data.dueTime}:00`);
    console.log(date2.getTime());
    const todo = {
      title: data.title,
      location: data.location,
      dueDate: date2.getTime(),
    };
    props.addTodo(todo);
    reset();
    props.toggleForm(false);
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
          <form onSubmit={handleSubmit(handleAdd)}>
            <div style={{ padding: "10px" }}></div>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="What is it?"
            />
            {errors.title && <p>Please enter a title</p>}
            <div style={{ padding: "10px" }}></div>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Where is it?"
            />
            {errors.location && <p>Please enter a location</p>}
            <div style={{ padding: "10px" }}></div>
            <input {...register("dueDate", { required: true })} type="date" />
            {errors.dueDate && <p>Please enter a date</p>}
            <div style={{ padding: "10px" }}></div>
            <input {...register("dueTime", { required: true })} type="time" />
            {errors.dueTime && <p>Please enter a time</p>}
            <div style={{ padding: "10px" }}></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewTodo;
