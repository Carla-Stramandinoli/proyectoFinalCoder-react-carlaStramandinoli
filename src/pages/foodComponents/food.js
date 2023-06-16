const food = [{
    id: 1,
    name: "Eukanuba",
    imageURL: "https://puppis.vteximg.com.br/arquivos/ids/191386-1000-1000/138004--2-.jpg?v=638103440684470000",
    description: '',
    quantity: 15,
    price: 13000
},
{
    id: 2,
    name: "Eukanuba",
    imageURL: "https://puppis.vteximg.com.br/arquivos/ids/191386-1000-1000/138004--2-.jpg?v=638103440684470000",
    quantity: 10,
    price: 9000
},
{
    id: 3,
    name: "Eukanuba",
    imageURL: "https://puppis.vteximg.com.br/arquivos/ids/191386-1000-1000/138004--2-.jpg?v=638103440684470000",
    quantity: 5,
    price: 4000
}]

 export const getFood = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(food)
        }, 2000)
    })
}
