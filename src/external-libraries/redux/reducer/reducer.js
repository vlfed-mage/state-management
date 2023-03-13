const todosReducer = (state = { todo: '', todos: [] }, action) => {
    switch (action.type) {
        case 'TODO_TYPING':
            return {
                ...state,
                todo: action.todo,
            };
        case 'TODO_ADD':
            return {
                ...state,
                todo: '',
                todos: [...state.todos, action.todo],
            };
        default:
            return state;
    }
};

export default todosReducer;
