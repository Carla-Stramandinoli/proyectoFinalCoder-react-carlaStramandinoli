import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';

function DetailsComponent({ data }) {

  return (
    <Card sx={{ maxWidth: 350 }} >
      <CardMedia
        component="img"
        alt={data?.title}
        height="340"
        image={data?.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={'/details/' + data?.id}>
            {data?.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${data?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={data?.stock || 0} data={data} />
      </CardActions>
    </Card>
  )
}

export default DetailsComponent;

