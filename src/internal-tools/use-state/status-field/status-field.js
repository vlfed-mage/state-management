import React, { useState } from 'react';

const StatusField = ({ onEnter }) => {
    const [massage, setMassage] = useState('');

    const onClickHandler = e => {
        if (e.keyCode === 13) {
            onEnter(massage);
            setMassage('');
        }
    };

    const onChangeHandler = e => setMassage(e.target.value);

    return (
        <input
            type='text'
            value={massage}
            onKeyUp={onClickHandler}
            onChange={onChangeHandler}
        />
    );
};

export default StatusField;
