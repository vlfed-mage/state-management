import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import store from '../store';

const App = () => {
    const dispatch = useDispatch();
    const todoState = useSelector(state => state.todosReducer);

    const { todo, todos } = todoState;

    return (
        <div>
            <input
                type='text'
                value={todo}
                onChange={e => dispatch({ type: 'TODO_TYPING', todo: e.target.value })}
                onKeyUp={e =>
                    e.key === 'Enter'
                        ? dispatch({ type: 'TODO_ADD', todo: e.target.value })
                        : null
                }
            />
            <ul>
                {todos.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppContainer;
