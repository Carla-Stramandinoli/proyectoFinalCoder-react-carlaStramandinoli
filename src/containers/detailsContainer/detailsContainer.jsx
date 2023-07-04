import React from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../dataProducts/data';

function DetailsComponents() {
  const [data, setData] = React.useState()
  const { id } = useParams();

  React.useEffect(() => {
    getProduct(id)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [id])
  console.log(data)

  return (
    <div>
      <DetailsComponents data={data}/>
    </div>
  )
}


export default DetailsComponents;