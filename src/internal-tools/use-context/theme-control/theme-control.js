import React from 'react';
import { useAppContext } from '../app-context';

const ThemeControl = () => {
    const { theme, setTheme } = useAppContext();
    return (
        <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{ cursor: 'pointer' }}>
            Toggle the theme
        </div>
    );
};

export default ThemeControl;
