import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function CardsComponents({ data }) {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                alt={data.title}
                height="140"
                image={data.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={'/details/' + data.id}>
                    {data.title}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio: ${data.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
        </Card>
    )
}

export default CardsComponents;