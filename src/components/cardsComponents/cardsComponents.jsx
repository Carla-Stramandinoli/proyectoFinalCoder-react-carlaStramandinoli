import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function CardsComponents({ name, imageURL, description, quantity, price }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={'/details/:id'}>
                    {data.title}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description || ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad por kg:{quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
        </Card>
    )
}

export default CardsComponents;