import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:9096/api',
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;