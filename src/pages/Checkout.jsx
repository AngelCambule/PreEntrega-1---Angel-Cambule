import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../Context/CartContext";
import { PaymentSuccess } from "../Components/PaymentSuccess";
import { Ring } from "@uiball/loaders";

const styles = {
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop:"140px"
    },
    paymentButton: {
      borderRadius: "12px",
      marginTop: "10px",
      fontSize: "1rem",
    },
  };
  


export const Checkout = () => {
  const [loading, setLoading] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [paymentId, setPaymentId] = React.useState("");

  const { count } = React.useContext(CartContext);
  const navigate = useNavigate();

  const location = useLocation();
  const total = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const cel = e.target.cel.value;
    const dni = e.target.dni.value;
    const direc = e.target.direccion.value;
    const email = e.target.email.value;
    const codPostal = e.target.codPostal.value;



    setLoading(true);


    const newProduct = {
      nombre: name,
      cel: cel,
      dni: dni,
      direc: direc,
      email: email,
      codPostal: codPostal,
      total: total,
      products: count, 
      status: "En Curso"
    };
    const db = getFirestore();
    const productCollection = collection(db, "pedidos");
    addDoc(productCollection, newProduct)
      .then(({ id }) => {
        setPaymentSuccess(true);
        setPaymentId(id);
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
      
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };
  return (
    <Container style={styles.container} fluid>
      <Row>
      <Form onSubmit={handleSubmit}>
        <Col md={{ span: 8, offset: 3 }}>
          <h1 style={{fontSize:"30px"}} className="text-center">Formulario de Compra</h1>
          
            <Form.Group controlId="name">
              <Form.Label>Nombre del Comprador:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                required
              />
            </Form.Group>

            <Form.Group controlId="direccion">
              <Form.Label>Direccion:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Direccion"
                required
              />
            </Form.Group>

            <Form.Group controlId="codPostal">
              <Form.Label>Codigo Postal:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cod. Postal"
                
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="asdasdasd@xxxx.com"
                required
              />
            </Form.Group>

            <Form.Group controlId="dni">
              <Form.Label>Numero de Documento:</Form.Label>
              <Form.Control
                type="number"
                placeholder="DNI"
                
                required
              />
            </Form.Group>

            <Form.Group controlId="cel">
              <Form.Label>Numero de Celular:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Celular"
                
                required
              />
            </Form.Group>
            
            <Button
              variant="primary"
              type="submit"
              style={styles.paymentButton}
            >
              {loading ? (
                <Ring size={20} lineWeight={5} speed={2} color="black" />
              ) : (
                `Hacer Pedido\n $${total}`
              )}
            </Button>
          
            <div style={{fontSize:"20px", marginTop:"20px"}}>
                Luego de hacer el pedido nos contactaremos con vos para seguir con la compra!
            </div>

        </Col>
        </Form>
        </Row>
    
      
      {paymentSuccess && <PaymentSuccess paymentId={paymentId} />}
    </Container>
  );
};