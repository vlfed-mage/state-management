import React from 'react';

import usePageState from '../hooks';

const Footer = () => {
    const [page] = usePageState();

    return <div>The current page is {page}</div>;
};

export default Footer;
