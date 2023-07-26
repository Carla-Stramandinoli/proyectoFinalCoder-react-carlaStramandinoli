import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import MoreInfo from '../cardsComponents/moreInfo';
import ItemCount from '../itemCount/itemCount';

function DetailsComponent({ data }) {

  return (
    <Card sx={{ maxWidth: 400 }} >
      <CardMedia
        component="img"
        alt={data?.title}
        height="340"
        image={data?.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textDecoration: 'none', color: '#734E65' }}>
          {data?.title}
        </Typography>
        <Typography style={componentStyle} variant="body2" color="text.secondary">
          Precio: ${data?.price}
        </Typography>
        <Typography style={componentStyle} variant="body2" color="text.secondary">
          {
            data?.stock > 1 ?
              <>
                Quedan {data?.stock} en stock.
              </> :
              <>
                Queda {data?.stock} en stock.
              </>
          }
        </Typography>
        <Box>
          <MoreInfo description={data?.description} />
        </Box>
      </CardContent>
      <CardActions style={componentStyle}>
        <ItemCount stock={data?.stock || 0} data={data} />
      </CardActions>
    </Card>
  )
}

export default DetailsComponent;

const componentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
}