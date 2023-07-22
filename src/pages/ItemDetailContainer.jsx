import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ButtonsCart from '../Components/ButtonsCart';

import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  const handleVolver = () => {
    window.history.back();
  };

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "products");

    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setIsLoading(false); 
    });
  }, []);

  const filteredProduct = productsData.find((elemento) => elemento.id === productId);

  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>
      <button onClick={handleVolver} style={{ height: "30px", marginTop: "50px" }}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {isLoading ? ( 
        <p>Cargando...</p>
      ) : filteredProduct ? ( 
        <Card key={filteredProduct.id} style={{ width: '32rem', margin: "40px" }}>
          <Card.Header bg="dark" text="light"><h1>{filteredProduct.nombre}</h1></Card.Header>
          {filteredProduct.img && <Card.Image src={filteredProduct.img} style={{ padding: "10px" }} />}
          <Card.Body>
            <Card.Title><h2>${filteredProduct.precio} C/U</h2></Card.Title>
            <Card.Title>Medidas: <br />{filteredProduct.medidas}</Card.Title>
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
            <ButtonsCart productId={filteredProduct.id} />
          </Card.Body>
        </Card>
      ) : ( 
        <p>El producto no existe o no se ha encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
