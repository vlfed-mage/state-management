import React, { useState } from 'react';

import usePicture from '../use-picture';

function App() {
    const [date, setDate] = useState('2020-05-05');
    const { picture, loading } = usePicture(date);

    if (loading) return <div>Loading...</div>;

    const { title, explanation, url } = picture;
    return (
        <div>
            <input type='date' value={date} onChange={e => setDate(e.target.value)} />
            <h2>{title}</h2>
            <div>{explanation}</div>
            <img src={url} alt={title} />
        </div>
    );
}

export default App;
