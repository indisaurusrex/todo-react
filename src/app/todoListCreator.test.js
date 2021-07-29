import createTodoList from './todoListCreator';

jest.mock('random-words', () => () => ['hello']);

describe('todoListCreator', () => {
    describe('when I call createTodoList', () => {
        it('should create 10 todos', () => {
            const todos = createTodoList();
            expect(todos).toHaveLength(10);
        })

        it('should have 5 elements to each todo', () => {
            const todos = createTodoList();
            expect(Object.keys(todos[0])).toHaveLength(5);
        })

        it('should have words in the title', () => {
            const todos = createTodoList();
            expect(todos[0].title).toEqual('hello');
        })
    })
})
