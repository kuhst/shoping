import {makeRequest} from "../makeRequest";

export const getProducts = () => makeRequest.get('products')
