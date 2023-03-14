import axios from 'axios';
import { useState, useEffect } from 'react';

export const useNetwork = ({ url, params }) => {
    const [state, setState] = useState({ loading: true });

    useEffect(() => {
        setState({ loading: true });

        const makeRequest = async () => {
            try {
                const { data } = await axios.get(url, { params });
                setState({ data, loading: false });
            } catch (error) {
                setState({ error, loading: false });
            }
        };

        makeRequest();
    }, [url, params]);

    return state;
};

export const useStorage = (key, initialState) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const existingState = localStorage.getItem(key);
        if (existingState) setState(JSON.parse(existingState));
    }, [key]);

    return [
        state,
        state => {
            setState(state);
            localStorage.setItem(key, JSON.stringify(state));
        },
    ];
};
