import { useState,useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product,setProduct]= useState({})
    const {id}=useParams()

    useEffect (()=>{
        const fetchData  = async()=>{
            
                const response = await fetch('/product.json')
                const productos = await response.json()
                console.log(productos)
                const product = productos.find(producto => producto.id === id)
                console.log(product)
                setProduct(product)
        }
        fetchData()
},[])


return (
    
    <div>
    {product == undefined ? <Spinner/> : <ItemDetail product={product}/>}
    
    </div>
    
)
}

export default ItemDetailContainer
