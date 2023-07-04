import React from 'react'
import { Box } from '@mui/system'
import CardsComponents from '../../components/cardsComponents/cardsComponents'
import { getProducts } from '../../dataProducts/data'
import { Typography } from '@mui/material';

 function FoodComponents() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getProducts()
    .then((resp) =>{
      setItems(resp);
    })
    .finally(()=>{
      setLoading(false);
    })
  },[])
 

  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5}>
      {loading ? 
      <Typography>Cargando...</Typography>
    :
    items.map((item, index)=>{
      return  <CardsComponents key={index} name={item.name} imageURL={item.imageURL} description={item.description} quantity={item.quantity} price={item.price}/>
    })
   
    }
    </Box>
  )
}


export default FoodComponents;