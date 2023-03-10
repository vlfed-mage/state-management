import React from 'react';

import useDarkMode from '../hooks';

const App = () => {
    let isDarkMode = useDarkMode();
    return (
        <div
            style={{
                padding: 16,
                height: 500,
                width: 500,
                color: isDarkMode ? 'white' : 'black',
                backgroundColor: isDarkMode ? 'black' : 'white',
            }}>
            Here's some content.
        </div>
    );
};

export default App;
