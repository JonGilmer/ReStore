import axios, {AxiosError, AxiosResponse} from "axios";
import {toast} from "react-toastify";
import {history} from "../..";

axios.defaults.baseURL = 'https://localhost:7178/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
    return response
}, (error : AxiosError) => {
    console.log('error is: '+error)
    const {data, status} = error.response!;
    switch (status) {
        case 400:
            // @ts-ignore
            if (data.errors){
                const modelStateErrors: string[] = [];
                // @ts-ignore
                for(const key in data.errors) {
                    // @ts-ignore
                    if (data.errors[key]){
                        // @ts-ignore
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            // @ts-ignore
            toast.error(data.title);
            break;
        case 401:
            // @ts-ignore
            toast.error(data.title);
            break;
        case 404:
            // @ts-ignore
            toast.error(data.title);
            break;
        case 500:
            history.push('/server-error', {error})
            break;
        default:
            break;
    }
    console.log('caught by interceptor');
    return Promise.reject(error.response)
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url,body).then(responseBody),
    put: (url: string, body: object) => axios.put(url,body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
    get404Error: () => requests.get('buggy/not-found'),
    get400Error: () => requests.get('buggy/bad-request'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
    get401Error: () => requests.get('buggy/unauthorized'),
}

const agent = {
    Catalog, TestErrors
}
export default agent;
