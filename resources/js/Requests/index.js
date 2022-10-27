import axios from "axios";


export const requests = {
    login: {
        uri: "/login"
    },
    regsiter: {
        uri: "/register"
    }
};

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export  async function sendRequest(request_name, payload) {
    try {
        const response = await axios.get('/');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

