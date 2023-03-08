import React, { useCallback, useState } from 'react';
import useComplete from '../use-complete';

function App() {
    const [clicked, setClicked] = useState(false);

    // useComplete(data => console.log(data));
    // now we have massage 'test data' all the time when onClick is called
    // for preventing this we need to use useCallback

    const completedRequest = useCallback(data => console.log(data), []);
    useComplete(completedRequest); // now it should works fine

    return (
        <div
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => setClicked(!clicked)}>
            hello! {clicked ? 'clicked' : 'not clicked'}
        </div>
    );
}

export default App;
