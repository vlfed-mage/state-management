import React, { useReducer } from 'react';

import reducer from '../reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, { counter: 0, username: '' });

    return (
        <div>
            <button onClick={() => dispatch({ type: 'BUTTON_CLICK' })}>Click me</button>
            current count is {state.counter}
            <input
                type='text'
                value={state.username}
                onChange={e => dispatch({ type: 'SET_USER_NAME', payload: e.target.value })}
            />
            user name is {state.username}
        </div>
    );
}

export default App;
