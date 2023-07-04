import React from 'react'

 function ItemCount() {
    const [counter, setCounter] = React.useState();
    
  return (
    <div>
        <button>+</button>
        <p></p>
        <button>-</button>
    </div>
  )
}

export default ItemCount;