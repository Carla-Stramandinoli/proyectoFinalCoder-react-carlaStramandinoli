import axios from "axios";

export const getProducts = (search) => {
    const request = axios({
        method: "GET",
        url: `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    })
    request.then((resp)=>{ 
        let arrayVacio = [];
        let arrayProds = resp.data.results;
        console.log(resp);
        for (let i = 0; i < arrayProds.length; i++){
            console.log(arrayProds[i]);
            let record = [{id: i, title: arrayProds[i].title}];
            arrayVacio.push(record);
        }
        console.log(arrayVacio);
        return arrayVacio;
    })
}


export const getProductDetail(){}
