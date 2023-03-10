import React from 'react';
import { RecoilRoot } from 'recoil';

import App from './app';

const AppContainer = () => {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    );
};

export default AppContainer;
