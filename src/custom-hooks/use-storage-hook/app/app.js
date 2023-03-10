import React from 'react';
import useStorage from '../use-storage';

const App = () => {
    const [count, setCount] = useStorage('count', 0);
    return (
        <div
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => {
                setCount(count + 1);
            }}>
            The counter is {count}
        </div>
    );
};

export default App;
