import React from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const CreateProduct = () => {

    const [nombre, setNombre] = React.useState()
    const [precio, setPrecio] = React.useState()
    const [img, setImg] = React.useState()
    const [category, setCategory] = React.useState()
    const [subcategory, setSubCategory] = React.useState()
    const [medidas, setMedidas] = React.useState()

    const handleNombreSet = (e) => {
        setNombre(e.target.value)
    }
    const handlePrecioSet = (e) => {
        setPrecio(e.target.value)
    }
    const handleImgSet = (e) => {
        setImg(e.target.value)
    }
    const handleCategorySet = (e) => {
        setCategory(e.target.value)
    }
    const handleSubCategorySet = (e) => {
        setSubCategory(e.target.value)
    }
    const handleMedidasSet = (e) => {
        setMedidas(e.target.value)
    }

    const handleSubmit = () => {

        const newProduct = {
            nombre,
            precio,
            img,
            category,
            subcategory,
            medidas
        }

    

    const db = getFirestore()
    const newProductCollection = collection(db, "products")
    addDoc(newProductCollection, newProduct).then(({id}) => console.log(id))
    }
  return (
    <div style={{marginTop:"200px"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "center", gap:"10px"}}>
        <input type="text" onChange={(e) => handleNombreSet(e)} placeholder='Nombre'/>
    <input type="number" onChange={(e) => handlePrecioSet(e)} placeholder='Precio'/>
    <input type="text" onChange={(e) => handleImgSet(e)} placeholder='Url de la img'/>
    <input type="text" onChange={(e) => handleCategorySet(e)} placeholder='Category'/>
    <input type="text" onChange={(e) => handleSubCategorySet(e)} placeholder='Subcategory'/>
    <input type="text" onChange={(e) => handleMedidasSet(e)} placeholder='Medidas : Alto: xxcm | Largo: xxcm | Ancho: xxcm'/>
    <button onClick={handleSubmit}>Agregar Producto</button>
        </div>
    

    </div>
  )
}

export default CreateProduct