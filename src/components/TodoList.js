import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class TodoList extends React.Component {

    render() {
      const rows = [];
  
      this.props.items.forEach((item) => {
        rows.push(
          <tr key={item.id}>
            <th>{item.title}</th>
            <th>{item.location}</th>
            <th>{item.dueTime}</th>
            <th>
              <Checkbox
                checked={item.done}
                onChange={() => this.props.changeCheckbox(item)}
              />
            </th>
          </tr>
        );
      });
  
      return (
        <div>
          <table>
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