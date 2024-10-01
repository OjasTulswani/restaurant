import axios from "axios";
import envConfig from "../../configs/env.config";

const AxiosService = axios.create({
    baseURL : envConfig.API_URL,
});

export default AxiosService;