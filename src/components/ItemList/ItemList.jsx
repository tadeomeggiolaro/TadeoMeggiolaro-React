import Item from "../Item/Item"
import '../ItemList/ItemList.css'
const ItemList = ({products}) => {

  return (
    <div className="divItemList">
      {products.map((product)=>(      
      <Item key={product.id} item={product}/>
    ))} 
    </div>
  )
}

export default ItemList
