import React from 'react'
import CardsComponents from '../cardsComponents/cardsComponents';

function ProductListComponent({ items }) {
    return (
        <div style={productListStyle}>
            {
                items.map((item, index) => <CardsComponents key={index} data={item}/>)
            }
        </div>
    )
}

export default ProductListComponent;

const productListStyle = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
}