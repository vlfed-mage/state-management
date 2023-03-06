import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({});
    const { Provider } = AppContext;
    return <Provider value={{ ...state, setTheme: theme => setState({ ...state, theme }) }}>{children}</Provider>;
};
