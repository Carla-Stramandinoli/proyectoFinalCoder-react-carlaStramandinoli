import React from 'react'
import ProdContainer from '../prodContainer/prodContainer'
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../dataProducts/data';

const categoryProd = [{id: 'all', title: 'Productos'}, {id: 'food', title: 'Alimentos'}, {id: 'toys', title: 'Juegos y accesorios'}, {id: 'feeders', title: 'Comederos'} ]

function Home() {
  const { itemId } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    if(!categoryProd.some(prod => prod.id === itemId)){
      navigate('/')
    }
  }, [categoryProd, navigate])

  React.useEffect(()=> {
    getProducts("alimentomascotas")
  })

  return (

    <div>
      <ProdContainer current={itemId} products={categoryProd}/>
    </div>
  )
}

export default Home;