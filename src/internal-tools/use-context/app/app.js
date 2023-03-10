import React from 'react';
import Content from '../content';
import Sidebar from '../sidebar';
import { AppProvider } from '../app-context';

const App = () => {
    return (
        <AppProvider>
            <div>
                <Content />
                <Sidebar />
            </div>
        </AppProvider>
    );
};

export default App;
