import React from 'react'
import ProdContainer from '../prodContainer/prodContainer'
import { useNavigate, useParams } from 'react-router-dom';
import ProductListComponent from '../../components/productListComponent/productListComponent';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const TOYS = 'toys';
const FEEDERS = 'feeders';
const FOOD = 'alimentomascotas';
const categoryProd = [{ id: 'all', title: 'Productos' }, { id: FOOD, title: 'Alimentos' }, { id: FEEDERS, title: 'Comederos' }, { id: TOYS, title: 'Juegos para mascotas' }]


function Home() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { itemId } = useParams();
  const navigate = useNavigate();

  const current = categoryProd.some(cat => cat.id === itemId) ? itemId : 'all';

  React.useEffect(() => {
    if (!categoryProd.some(prod => prod.id === itemId)) {
      navigate('/items/all')
    }
  }, [itemId, navigate])

  React.useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const getCollection = collection(db, "productos");

    if (itemId === 'all') {
      getDocs(getCollection)
        .then(resp => {
          setLoading(false);
          setItems(resp.docs.map(element => ({ id: element.id, ...element.data()})))
        })
    } else if (categoryProd.some(categories => categories.id === itemId)) {
      const q = query(getCollection, where("itemId", "==", itemId))
      getDocs(q)
        .then(resp => {
          setItems(resp.docs.map(element => ({ id: element.id, ...element.data()})))
          setLoading(false);
        })
    }
  }, [itemId])

  return (
    <div>
      <ProdContainer current={current} products={categoryProd} />
      <div style={{ padding: 30 }}>
        <ProductListComponent items={items} loading={loading}/>
      </div>
    </div>
  )
}

export default Home;
