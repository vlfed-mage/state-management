import { useEffect } from 'react';

const useComplete = completedRequest => {
    useEffect(() => {
        // network request

        completedRequest('test data');
    }, [completedRequest]);
};

export default useComplete;
