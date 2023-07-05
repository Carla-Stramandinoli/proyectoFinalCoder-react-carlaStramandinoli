import React from 'react'

 function DetailsComponent({data}) {
  return (
    <div>
      <img src={data?.pictures?.[0].url} alt={data?.title} />
      <h2>{data?.title}</h2>
      <h3>{data?.description}</h3>
    </div>  )
}

export default DetailsComponent;