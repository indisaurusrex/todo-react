import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class AddNewTodo extends React.Component {
    render() {
      return (
        <div id="add-new-todo" className="flex-item">
          <Button variant="contained" size="small" startIcon={<AddCircleIcon />}>
            Add an item
          </Button>
        </div>
      );
    }
  }

  export default AddNewTodo;