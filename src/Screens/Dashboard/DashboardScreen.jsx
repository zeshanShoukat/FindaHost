import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const DashboardScreen = () => {
  return (
    <>
    <Navbar />
    <div style={{display: "flex"}}>
    <Sidebar />
    </div>
    </>
  )
}

export default DashboardScreen