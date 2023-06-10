import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../products.json'
import { Card } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ItemDetailContainer = () => {
    const handleVolver = () => {
      window.history.back()
    }

    const {productId} = useParams();
    const stringId = JSON.parse(productId)
    const pid = Products.findIndex(elemento => {
      return elemento.id === stringId;
    
    })  
  return (
    
    <div style={{display:"flex", justifyContent: "center"}}>
      <button onClick={handleVolver} style={{height:"30px", marginTop:"50px"}}><FontAwesomeIcon icon={faArrowLeft} /></button>
    <Card key={Products[pid].id} style={{width: '32rem', margin:"40px"}}>
              <Card.Header bg="dark" text="light"><h1>{Products[pid].nombre}</h1></Card.Header>
              <Card.Image src={Products[pid].img} style={{padding:"10px"}}/>
              <Card.Body>
                <Card.Title><h2>${Products[pid].precio} C/U</h2></Card.Title>
                <Card.Title>Medidas: <br/>{Products[pid].medidas}</Card.Title>
                <div style={{display:"flex"}}>
                  <div style={{border:"1px solid black", padding:"10px",display:"flex", flexDirection:"column"}}>
                  <p>Color de la Estructura</p>
                    <select name="structureColorChoose" class="form-control-sm tipoEntregaId" size="1">
                      <option value="N">Negro</option>
                      <option value="B">Blanco</option>
                    </select>
                  </div>
                    <div style={{border:"1px solid black", padding:"10px",display:"flex", flexDirection:"column"}}>
                    <p>Color del Tejido</p>
                    <select name="colorChoose" class="form-control-sm tipoEntregaId" size="1">
                      <option value="N">Negro</option>
                      <option value="Be">Beige</option>
                      <option value="B">Blanco</option>
                      <option value="M">Marron</option>
                      <option value="V">Verde Agua</option>
                    </select>
                    </div>
                    <div style={{border:"1px solid black", padding:"10px",display:"flex", flexDirection:"column"}}>
                    <p>Material del Tejido</p>
                <select name="materialChoose" class="form-control-sm tipoEntregaId" size="1">
                <option value="SIMILY">Simil Yute</option>
                <option value="PVC}">Cable PVC</option>
                </select></div>
                </div>
              </Card.Body>
              <Card.Footer bg="secondary">
                <Card.Link  text="light" href="#">Agregar al Carrito</Card.Link>
              </Card.Footer>
            </Card></div>
  )
}

export default ItemDetailContainer