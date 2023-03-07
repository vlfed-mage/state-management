import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import App from './internal-tools/use-state/app';
// import App from './internal-tools/use-reducer/app';
// import App from './internal-tools/use-context/app';
import App from './internal-tools/use-effect/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
