import axios,{AxiosInstance} from "axios";

export const Api: AxiosInstance=axios.create({
    baseURL: "http://172.17.0.1:8080/"
})