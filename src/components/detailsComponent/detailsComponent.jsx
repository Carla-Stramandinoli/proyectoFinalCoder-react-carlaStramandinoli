import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import MoreInfo from './moreInfo';
import ItemCount from '../itemCount/itemCount';

function DetailsComponent({ data }) {

  return (
    <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
      <CardMedia
        component="img"
        alt={data?.title}
        height="340"
        image={data?.imageURL}
      />
      <CardContent sx={{padding: '4px'}}>
        <Typography gutterBottom variant="h5" component="div" style={{ textDecoration: 'none', color: '#734E65' }}>
          {data?.title}
        </Typography>
        <Typography style={componentStyle} variant="p" color="text.secondary">
          Precio: ${data?.price}
        </Typography>
        <Box>
          <MoreInfo description={data?.description} />
        </Box>
      </CardContent>
      <CardActions sx={{padding: '5px'}} style={componentStyle}>
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
  fontSize: 20
}