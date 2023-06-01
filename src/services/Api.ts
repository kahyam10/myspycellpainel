import axios from "axios";

const Api = axios.create({
     baseURL:"http://45.178.182.24:3000/",
    //baseURL:"http://192.168.3.4:3333/",
})

export default Api;