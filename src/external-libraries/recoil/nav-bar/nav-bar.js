import React from 'react';

import usePageState from '../hooks';

const pages = ['Home', 'About', 'Features'];

const NavBar = () => {
    const [page, setPage] = usePageState();
    return (
        <ul>
            {pages.map(name => (
                <li
                    key={name}
                    onClick={() => setPage(name)}
                    style={{ color: page === name ? 'tomato' : 'black' }}>
                    {name}
                </li>
            ))}
        </ul>
    );
};

export default NavBar;
