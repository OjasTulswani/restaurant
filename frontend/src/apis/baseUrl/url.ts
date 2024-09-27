import axios from "axios";


const baseURL = 'http://localhost:8080/api'

const Axios = axios.create({
    baseURL,
});

export default Axios;