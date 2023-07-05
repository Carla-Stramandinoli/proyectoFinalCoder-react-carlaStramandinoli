import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../dataProducts/data'
import DetailsComponents from '../../components/detailsComponent/detailsComponent'

function DetailsContainer({ image, title, price }) {
  const [data, setData] = React.useState()
  const { id } = useParams();

  React.useEffect(() => {
    getProductDetail(id)
      .then((res) => {
        let prod = {
          id: res.data.id,
          title: res.data.title,
          image: res.data.thumbnail,
          price: res.data.price
        }
        setData(prod)
      })
  }, [id])
  console.log(data);

  return (
    <div style={detailsStyle}>
      <DetailsComponents data={data} />
    </div>
  )
}


export default DetailsContainer;

const detailsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  padding: 60,
}