import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    
    <div className="bigProductDetail">
            <img className="imgShopDetail"  src={product?.image} alt='' />
            <h2>{product?.name}</h2>
            <p className="pPrice">${product?.price}</p>
            <p className="pDescription">{product?.description}</p>
            <p className="pStock">Stock:{product?.stock}</p>
            
            
            <ItemCount initial={1} stock={product.stock}/> 
    </div>
  )
}

export default ItemDetail
