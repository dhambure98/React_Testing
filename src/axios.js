import axios from "axios";

//base_url
//using API backend (fake API JSONPlaolder)

const instance = axios.create({
    //baseURL
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:8080/app/api/v1/'
    //header

    //timeout
})

export default instance;