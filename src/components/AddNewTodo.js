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
  }
  render() {
    return (
      <div id="add-new-todo" className="flex-item">
        <div
          className={
            'card textcenter mt-3 ' +
            (this.props.formDisplay ? "" : "add-appointment")
          }
        >
          {/* <div className="card textcenter mt-3"> */}
          <Button
            variant="contained"
            size="small"
            startIcon={<AddCircleIcon />}
            onClick={this.props.toggleForm}
          >
            Add an item
          </Button>

          <div className="card-body">
            <form id="aptForm" noValidate>
              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="title"
                  readOnly
                >
                  What is it?
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="To do title"
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="location"
                >
                  Where is it?
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="dueDate"
                >
                  What day is it due?
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    name="dueDate"
                    id="dueDate"
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="dueTime"
                >
                  What time?
                </label>
                <div className="col-md-4">
                  <input
                    type="time"
                    className="form-control"
                    name="dueTime"
                    id="dueTime"
                  />
                </div>
              </div>

              <div className="form-group form-row mb-0">
                <div className="offset-md-2 col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                  >
                    Add it to the list
                  </button>
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
