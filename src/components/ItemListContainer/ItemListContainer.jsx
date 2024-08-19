import { useState,useEffect } from 'react'
import ItemList from '../ItemList//ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = ({greeting}) => {

    const [products,setProducts]= useState([])
    const{categoryId}=useParams()

useEffect (()=>{
        const fetchData  = async()=>{
            
                const response = await fetch('/product.json')
                const productos = await response.json()
                const filtredProduct = categoryId ? productos.filter((p)=> p.category === categoryId) : productos
                setProducts(filtredProduct)
        }
        fetchData()
},[categoryId])

return(
    <div className="div-titulo">
    
    <h1>{greeting}</h1>
    
    {products == undefined ? <Spinner/> : <ItemList products={products}/>}
    </div>
    
)
}

export default ItemListContainer
