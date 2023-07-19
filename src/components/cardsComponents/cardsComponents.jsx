import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';

function CardsComponents({ data }) {
    const {id, title, imageURL, stock, price} = data

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={'/details/' + id}>
                        {title}
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio: ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <ItemCount stock={stock} data={data}/>
            </CardActions>
        </Card>
    )
}

export default CardsComponents;