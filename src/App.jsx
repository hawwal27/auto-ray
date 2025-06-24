import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import BookRepair from './Pages/Bookreapair'
import ShopPart from './Pages/ShopPart'

const App = () => {
  return (
    <div>
       <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='BookRepair' element={<BookRepair/>}/>
      <Route path='Shop' element={<ShopPart/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default App
