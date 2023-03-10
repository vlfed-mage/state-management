import { useNetwork } from 'servises-hooks'; // import from node-modules after publishing package to npm

const usePicture = day => {
    const api_key = 'Nnn33kCAlDldcGYBaBUPq6gRe1OuMWRuaAPd7p3f';
    const { data, loading } = useNetwork({
        url: `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${day}`,
    });

    return { picture: data, loading };
};

export default usePicture;
