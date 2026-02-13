import axios from "axios";

export const api = axios.create({
    baseURL: "https://simple-task-manager-nextjs.onrender.com/",
})