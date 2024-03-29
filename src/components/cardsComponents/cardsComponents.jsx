import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';

function CardsComponents({ data }) {
    const { id, title, imageURL, stock, price } = data

    return (
        <Card sx={{ maxWidth: 270, boxShadow: 3 }}>
            <CardMedia
                component="img"
                alt={title}
                height="160"
                image={imageURL}
            />
            <CardContent sx={{ padding: '4px' }}>
                <Typography variant="p" component="div">
                    <Link to={'/details/' + id} style={{ textDecoration: 'none', color: '#734E65' }}>
                        {title}
                    </Link>
                </Typography>
                <Box p={1}>
                    <Typography style={componentStyle} variant="p" color="text.secondary">
                        Precio: ${price}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ padding: '5px' }} style={componentStyle}>
                <ItemCount stock={stock} data={data} />
            </CardActions>
        </Card>
    )
}

export default CardsComponents;

const componentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 15
}
