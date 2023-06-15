import React from 'react'
import NavBar from '../navBar/navBar'
import TabsComponents from '../tabsComponents/TabsComponents';

 function home() {
  return (
    <div>
        <NavBar />
        <TabsComponents />

        <h1>Aca va la pagina home</h1>
    </div>
  )
}

export default home;