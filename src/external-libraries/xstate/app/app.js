import React from 'react';

import { useTodos } from '../hooks';

const App = () => {
    const [state, send] = useTodos();

    return (
        <div>
            <input
                type='text'
                value={state.context.todo}
                onChange={e => send('TODO.TYPING', e.target)}
                onKeyUp={e => (e.key === 'Enter' ? send('TODOS.ADD', e.target) : null)}
            />
            <ul>
                {state.context.todos.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
