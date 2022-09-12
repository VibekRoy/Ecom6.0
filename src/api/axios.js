import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001/'
    // baseURL: 'https://synthisha.herokuapp.com'
    //baseURL: 'https://web-spire.herokuapp.com'
});