import axios from 'axios';

const getPicture = async date => {
    return await axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
};

export default getPicture;
