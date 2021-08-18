const todosFromStorage = (todos) => {
  let itemToReturn = [];
  // eslint-disable-next-line
  if (localStorage.getItem('items') === null || '[]') {
    itemToReturn = todos;
  } else {
    itemToReturn = JSON.parse(localStorage.getItem('items') || []);
  }
  return itemToReturn;
};

export default todosFromStorage;
