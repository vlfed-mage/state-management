import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import App from './internal-tools/use-state/app';
// import App from './internal-tools/use-reducer/app';
// import App from './internal-tools/use-context/app';
// import App from './internal-tools/use-effect/app';
// import App from './custom-hooks/encapsulating-state-logic/app';
// import App from './custom-hooks/building-network-request-hook/app';
// import App from './custom-hooks/use-storage-hook/app';
// import App from './custom-hooks/use-storage-hook/app';
// import App from './common-problems-and-other-hooks/infinite-renderer/app';
import App from './common-problems-and-other-hooks/use-callback/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
