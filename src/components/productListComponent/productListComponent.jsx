import { Box, CircularProgress } from '@mui/material';
import React from 'react'
import CardsComponents from '../cardsComponents/cardsComponents';

function ProductListComponent({ items, loading }) {
    return (
        <div style={productListStyle}>
            {
                Boolean(loading) ?
                    <Box >
                        <CircularProgress color="secondary"/>
                    </Box>
                    :
                    items.map((item, index) => <CardsComponents key={index} data={item} />)
            }
        </div>
    )
}

export default ProductListComponent;

const productListStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
}