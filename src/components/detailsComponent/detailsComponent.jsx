import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function DetailsComponent({ data }) {
  return (
    <Card sx={{ maxWidth: 350}} >
      <CardMedia
        component="img"
        alt={data?.title}
        height="340"
        image={data?.image}
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
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  )
}

export default DetailsComponent;

