import axios from "axios";

//base_url
//using API backend (fake API JSONPlaolder)

const instance = axios.create({
    //baseURL
    baseURL: 'https://jsonplaceholder.typicode.com'
    //header

    //timeout
})

export default instance;