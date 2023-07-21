import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card } from 'bootstrap-4-react';

import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Category = () => {
    
    const {productCat} = useParams()

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

    const catEncontrada = productsData.filter(elemento => 
        elemento.category === `${productCat}` || 
        elemento.subcategory === `${productCat}`)
    
  return (
    <div>
    <div style={{display: "flex", flexWrap:"wrap" , justifyContent:"center"}}>
      
        {catEncontrada.map ((filtProducts) => {
            return (
              
              <Card key={filtProducts.id} style={{ width: '18rem', margin:"40px", marginTop:"150px"}}>
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