import React, { useState, useEffect } from 'react';
import { Card } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {

  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products")
    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);
console.log(productsData)
    return (
      <div>
        <div style={{paddingTop:"100px"}}>
          
            <div style={{display: "flex", flexWrap:"wrap" , justifyContent:"center"}}>
        {productsData.map((producto) => {
            return (
            <Card key={producto.id} style={{  width: '18rem', margin:"40px", background:"transparent"}}>
        <Card.Header style={{backgroundColor:"rgb(77, 26, 43)"}} text="light">{producto.nombre}</Card.Header>
        <Link to={`/products/item/${producto.id}`}><Card.Image  src={producto.img} style={{padding:"10px"}}/></Link>
        <Card.Body>
          <Card.Title>${producto.precio} C/U</Card.Title>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'rgba(121, 67, 85, 0.822)'}}>
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
