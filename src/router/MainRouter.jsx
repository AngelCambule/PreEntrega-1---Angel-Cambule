import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar2 from '../Components/NavBar2'
import Home from '../pages/Home'
import ItemListContainer from '../Components/ItemListContainer'
import NotFound from '../pages/NotFound'
import Category from '../pages/Category'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import Footer from '../Components/Footer'
import CreateProduct from '../Components/CreateProduct'

const MainRouter = () => {
  return (
    <div>
    <Router>
    <NavBar2 />
    <Routes >
        <Route exact path='*' element={<NotFound/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/products' element={<ItemListContainer/>}></Route>
        <Route exact path='/products/item/:productId' element={<ItemDetailContainer/>}></Route>
        <Route exact path='/products/category/:productCat' element={<Category/>}></Route>
        <Route exact path='/products/category/:productSubCat' element={<Category/>}></Route>
        <Route exact path='/createproduct' element={<CreateProduct/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </div>
  )
}

export default MainRouter