import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Home from '../pages/Home'
import ItemListContainer from '../Components/ItemListContainer'
import NotFound from '../pages/NotFound'
import Category from '../pages/Category'
import ItemDetailContainer from '../pages/ItemDetailContainer'

const MainRouter = () => {
  return (
    <Router>
    <NavBar/>
    <Routes>
        <Route exact path='*' element={<NotFound/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/products' element={<ItemListContainer/>}></Route>
        <Route exact path='/products/item/:productId' element={<ItemDetailContainer/>}></Route>
        <Route exact path='/products/category/:productCat' element={<Category/>}></Route>
        {/* <Route exact path='/products/interior' element={<Category/>}></Route>
        <Route exact path='/products/mesa' element={<Category/>}></Route> */}
    </Routes>
    </Router>
  )
}

export default MainRouter