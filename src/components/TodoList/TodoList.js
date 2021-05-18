import React from "react";

class TodoList extends React.Component {
  render() {
    const items = this.props.items;

    let rows = items.map((item) => {
      let row = (
        <tr key={item.id}>
          <th id="title-th">{item.title}</th>
          <th>{item.location}</th>
          <th>{item.dueTime}</th>
          <th>
            <input
              id={item.id + "checkbox"}
              type="checkbox"
              defaultChecked={item.done}
              onChange={() => this.props.changeCheckbox(item)}
            />
          </th>
        </tr>
      );
      return row;
    });

    return (
      <div>
        <table className="todo-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Due</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
