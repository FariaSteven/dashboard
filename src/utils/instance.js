import axios from "axios";

const instance = axios.create({baseURL: "http://181.215.134.147:8019/api/v1/"});

export default instance