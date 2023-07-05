import axios from "axios";

export const getProducts = (search) => {
    const request = axios({
        method: "GET",
        url: `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    })
    return request;
}


export const getProductDetail = (id) => {
    const request = axios({
        method: "GET",
        url: `https://api.mercadolibre.com/items/${id}`
    })
    
    return request;
}
