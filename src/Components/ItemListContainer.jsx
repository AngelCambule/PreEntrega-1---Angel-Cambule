import React from 'react';
import { Card, Button } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import Products from '../products.json';

const ItemListContainer = () => {
    return (
      <div>
        <div style={{paddingTop:"100px"}}>
        <Link to='/products/category/jardin'><Button  primary style={{margin:"40px 10px 0px 10px"}}>Jardin</Button></Link>
      <Link to='/products/category/interior'><Button primary style={{margin:"40px 10px 0px 10px"}}>Interior</Button></Link>
      <Link to='/products/category/mesa'><Button primary style={{margin:"40px 10px 0px 10px"}}>Mesas</Button></Link>
      <Link to='/products/category/combos'><Button danger style={{margin:"40px 10px 0px 10px"}}>Combos</Button></Link>
      <Link to='/products/category/unidad'><Button danger style={{margin:"40px 10px 0px 10px"}}>Unidades</Button></Link>
      <Link to='/products'><Button secondary style={{margin:"40px 10px 0px 10px"}}>Ver Todo</Button></Link>
        <div style={{display: "flex", flexWrap:"wrap" , justifyContent:"center"}}>
        {Products.map((producto) => {
            return (
            <Card key={producto.id} style={{  width: '18rem', margin:"40px", background:"transparent"}}>
        <Card.Header bg="dark" text="light">{producto.nombre}</Card.Header>
        <Link to={`/products/item/${producto.id}`}><Card.Image  src={producto.img} style={{padding:"10px"}}/></Link>
        <Card.Body>
          <Card.Title>${producto.precio} C/U</Card.Title>
        </Card.Body>
        <Card.Footer bg="secondary">
          <Link to={`/products/item/${producto.id}`} style={{textDecoration:"none"}}><Card.Link  text="light">Ver Detalle</Card.Link></Link>
        </Card.Footer>
      </Card>
      )
        })}
      
      </div>
        </div>
        
      </div>
      )
  
}

export default ItemListContainer
