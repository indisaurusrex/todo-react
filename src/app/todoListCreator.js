import randomWords from 'random-words';

export default function createTodoList() {
  const todos = [];

  for (let i = 0; i < 10; i += 1) {
    todos.push({
      id: i,
      title: randomWords({ exactly: 1, wordsPerString: 3 })[0],
      details: randomWords(),
      done: Math.random() < 0.5,
    });
  }
  return todos;
}
