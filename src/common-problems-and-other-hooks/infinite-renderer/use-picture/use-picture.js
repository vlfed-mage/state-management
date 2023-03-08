import useNetwork from '../use-network';
import { useMemo } from 'react';

const usePicture = day => {
    const options = useMemo(
        () => ({
            url: `https://api.nasa.gov/planetary/apod`,
            params: { api_key: 'Nnn33kCAlDldcGYBaBUPq6gRe1OuMWRuaAPd7p3f', date: day },
        }),
        [day]
    );
    const { data, loading } = useNetwork(options);
    // const { data, loading } = useNetwork({
    //     url: `https://api.nasa.gov/planetary/apod`,
    //     params: { api_key: 'Nnn33kCAlDldcGYBaBUPq6gRe1OuMWRuaAPd7p3f', date: day },
    // }); // if you set attributes in this way, you'll get infinite rerender because every time it'll create new object

    return { picture: data, loading };
};

export default usePicture;
