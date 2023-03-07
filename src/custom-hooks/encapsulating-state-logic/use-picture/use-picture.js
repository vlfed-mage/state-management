import { useEffect, useState } from 'react';
import getPicture from '../services';

const usePicture = date => {
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        getPicture(date).then(response => {
            setPicture(response);
        });
    }, [date]);

    return picture;
};

export default usePicture;
