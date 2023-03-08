import { useState, useEffect } from 'react';
import axios from 'axios';

const useNetwork = ({ url, params }) => {
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

export default useNetwork;
