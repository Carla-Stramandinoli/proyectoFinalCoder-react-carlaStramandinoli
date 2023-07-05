import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../dataProducts/data'
import DetailsComponents from '../../components/detailsComponent/detailsComponent'

function DetailsContainer() {
  const [data, setData] = React.useState()
  const { id } = useParams();

  React.useEffect(() => {
    getProductDetail(id)
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


export default DetailsContainer;