import React from 'react';
import { Card, Button } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import Products from '../products.json';

const ItemListContainer = () => {
    return (
      <div>
        <div style={{paddingTop:"100px"}}>
        
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
