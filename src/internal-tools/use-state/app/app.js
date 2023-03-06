import React, { useState } from 'react';

import Massages from '../massages';
import StatusField from '../status-field';

function App() {
    const initialMassages = ['test', 'test2'];
    const [massages, setMassages] = useState(initialMassages);

    const onEnter = massage => setMassages([massage, ...massages]);

    return (
        <div>
            <StatusField onEnter={onEnter} />
            <Massages massages={massages} />
        </div>
    );
}

export default App;
