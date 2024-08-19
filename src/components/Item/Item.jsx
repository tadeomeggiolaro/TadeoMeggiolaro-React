import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({item}) => {
  return (
    <Link to={`/item/${item.id}`}>
    <div key={item.id} className="sectionShop">
            <img className="imgShop"  src={item.image} alt='' />
            <h2>{item.name}</h2>
            
            </div>
            </Link>
        )

}

export default Item
