import React from 'react';

const Massages = ({ massages }) => {
    return (
        <ul>
            {massages &&
                massages.map(massage => {
                    return <li key={massage}>{massage}</li>;
                })}
        </ul>
    );
};

export default Massages;
