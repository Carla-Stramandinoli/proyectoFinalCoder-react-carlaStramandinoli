import React from 'react'
import ProdContainer from '../prodContainer/prodContainer'
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../dataProducts/data';
import ProductListComponent from '../../components/productListComponent/productListComponent';

const TOYS = 'toys';
const FEEDERS = 'feeders';
const FOOD = 'alimentomascotas';
const categoryProd = [{ id: 'all', title: 'Productos' }, { id: FOOD, title: 'Alimentos' }, { id: FEEDERS, title: 'Comederos'  } ,  { id: TOYS, title: 'Juegos para mascotas'  } ]

function searchCategory(id) {
  switch (id) {
    case FOOD:
      return 'alimentomascotas';
    case FEEDERS:
      return 'comederosmascotas';
    case TOYS:
      return 'juegosmascotas';
    default: 
    return `${FOOD} + ${FEEDERS} + ${TOYS}`;
  }

}

function Home() {
  const [items, setItems] = React.useState([]);

  const { itemId } = useParams();
  const navigate = useNavigate();
  

  React.useEffect(() => {
    if (!categoryProd.some(prod => prod.id === itemId)) {
      navigate('/')
    }
  }, [itemId, navigate])

  React.useEffect(() => {
    getProducts(searchCategory(itemId)) 
      .then(resp => {
          let arrayVacio = [];
          let arrayProds = resp.data.results;
          for (let i = 0; i < arrayProds.length; i++){
              let record = {
                id: arrayProds[i].id, 
                title: arrayProds[i].title,
                price: arrayProds[i].price,
                image: arrayProds[i].thumbnail,
              };
              arrayVacio.push(record);
          }
          setItems(arrayVacio)
      })
    },[itemId])
    
  return (
    <div>
      <ProdContainer current={itemId} products={categoryProd} />
      <div style={{ padding: 30 }}>
        <ProductListComponent items={items} />
      </div>
    </div>
  )
}

export default Home;