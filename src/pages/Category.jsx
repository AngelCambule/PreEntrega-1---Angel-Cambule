import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Products from '../products.json'
import { Card, Button } from 'bootstrap-4-react';

const Category = () => {
    
    const {productCat} = useParams()
    
    const catEncontrada = Products.filter(elemento => 
        elemento.category[0] === `${productCat}`||
        elemento.category[1] === `${productCat}`)
    
  return (
    <div><Link to='/products/category/jardin'><Button  primary style={{margin:"40px 10px 0px 10px"}}>Jardin</Button></Link>
    <Link to='/products/category/interior'><Button primary style={{margin:"40px 10px 0px 10px"}}>Interior</Button></Link>
    <Link to='/products/category/mesa'><Button primary style={{margin:"40px 10px 0px 10px"}}>Mesas</Button></Link>
    <Link to='/products/category/combos'><Button danger style={{margin:"40px 10px 0px 10px"}}>Combos</Button></Link>
    <Link to='/products/category/unidad'><Button danger style={{margin:"40px 10px 0px 10px"}}>Unidades</Button></Link>
    <Link to='/products'><Button secondary style={{margin:"40px 10px 0px 10px"}}>Ver Todo</Button></Link>
    <div style={{display: "flex", flexWrap:"wrap" , justifyContent:"center"}}>
      
        {catEncontrada.map ((filtProducts) => {
            return (
              
              <Card key={filtProducts.id} style={{ width: '18rem', margin:"40px", paddingTop:"100px"}}>
              <Card.Header bg="dark" text="light">{filtProducts.nombre}</Card.Header>
              <Link to={`/products/item/${filtProducts.id}`}><Card.Image src={filtProducts.img} style={{padding:"10px"}}/></Link>
              <Card.Body>
                <Card.Title>${filtProducts.precio} C/U</Card.Title>
              </Card.Body>
              <Card.Footer bg="secondary">
              <Link to={`/products/item/${filtProducts.id}`} style={{textDecoration:"none"}}><Card.Link  text="light">Ver Detalle</Card.Link></Link>
              </Card.Footer>
            </Card>
                )
        })}
    </div></div>
  )
}

export default Category