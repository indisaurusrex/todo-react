const todoListSorter = (items) => {
  const sortedList = [...items];

  sortedList.sort((x, y) => x.done - y.done || x.dueDate - y.dueDate);

  return sortedList;
};

export default todoListSorter;
