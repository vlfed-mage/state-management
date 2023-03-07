import React from 'react';
import { useAppContext } from '../app-context';

const Content = () => {
    const { theme } = useAppContext();
    return (
        <div style={{ color: theme === 'dark' ? 'black' : 'tomato' }}>
            Here's the main content
        </div>
    );
};

export default Content;
