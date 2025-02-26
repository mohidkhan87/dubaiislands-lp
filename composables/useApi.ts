import axios from "axios";

export const useApi = () => {
    const config = useRuntimeConfig();
    const api = axios.create({
        baseURL: config.public.baseURL,
        headers: {
            "fc-api-key": config.public.fcApiKey,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
    return { api }
}