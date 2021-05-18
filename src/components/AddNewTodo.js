import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

class AddNewTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      location: "",
      dueDate: "",
      dueTime: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleAdd(e) {
    e.preventDefault();
    let tempTodo = {
      title: this.state.title,
      location: this.state.location,
      dueDate: this.state.dueDate,
      dueTime: this.state.dueTime,
    };

    this.props.addTodo(tempTodo);

    this.setState({
      title: "",
      location: "",
      dueDate: "",
      dueTime: "",
    });
    this.props.toggleForm();
  }

  render() {
    return (
      <div>
        <div
          className={
            "card textcenter mt-3 " +
            (this.props.formDisplay ? "" : "add-appointment")
          }
        >
          <Button
            size="small"
            startIcon={<AddCircleIcon />}
            onClick={this.props.toggleForm}
          >
            Add an item
          </Button>

          <div className="card-body" id="add-todo-card">
            <form id="aptForm" noValidate onSubmit={this.handleAdd}>
              <div className="form-group form-row">
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="What is it?"
                    value={this.state.title}
                    onChange={this.handleChange}
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
                    value={this.state.location}
                    onChange={this.handleChange}
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
                    value={this.state.dueDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-4 form-row">
                  <input
                    type="time"
                    className="form-control"
                    name="dueTime"
                    id="dueTime"
                    value={this.state.dueTime}
                    onChange={this.handleChange}
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
}

export default AddNewTodo;
