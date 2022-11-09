import axios, { AxiosResponse} from "axios";

const { REACT_APP_FAKE_STORE_BASE_URL } = process.env;

export const makeRequest = axios.create({
    baseURL: REACT_APP_FAKE_STORE_BASE_URL,
});

const respHandler = (res: AxiosResponse) => res.data

makeRequest.interceptors.response.use(respHandler);
