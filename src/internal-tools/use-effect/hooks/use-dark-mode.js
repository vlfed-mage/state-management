import { useEffect, useState } from 'react';

const initiallyDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const useDarkMode = () => {
    const [dark, setDark] = useState(initiallyDark);

    const eventHandler = e => {
        setDark(e.matches);
    };

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)') // doesn't work at chrome
            .addEventListener('change', eventHandler);

        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', eventHandler);
        };
    }, []);

    return dark;
};

export default useDarkMode;
