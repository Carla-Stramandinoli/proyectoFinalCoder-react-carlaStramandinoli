import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/itemCount';

function CardsComponents({ data }) {
    const { id, title, imageURL, stock, price } = data

    return (
        <Card sx={{ maxWidth: 220 }}>
            <CardMedia
                component="img"
                alt={title}
                height="160"
                image={imageURL}
            />
            <CardContent>
                <Typography style={titleStyle} variant="p" component="div">
                    <Link to={'/details/' + id} style={{ textDecoration: 'none', color: 'black' }}>
                        {title}
                    </Link>
                </Typography>
                    <Typography style={componentStyle}  variant="body2" color="text.secondary">
                        Precio: ${price}
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
            </CardContent>
            <CardActions style={componentStyle}>
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
}

const titleStyle = {
    width: "50ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}