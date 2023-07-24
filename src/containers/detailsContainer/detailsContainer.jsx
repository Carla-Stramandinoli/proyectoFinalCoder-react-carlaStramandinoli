import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsComponents from '../../components/detailsComponent/detailsComponent'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';


function DetailsContainer() {
  const [data, setData] = React.useState()
  const { id } = useParams();

  React.useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
    .then((resp) => {
      setData(
      {...resp.data(), id: resp.id}
      );
    })
  }, [id])

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
