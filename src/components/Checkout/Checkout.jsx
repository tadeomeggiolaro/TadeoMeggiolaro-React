import {useState,useContext} from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import {collection,addDoc,updateDoc,doc,getDoc,getFirestore} from "firebase/firestore"

const Checkout = () => {
    const {cart,totalCart,totalCartProduct,clearCart}= useContext(CartContext)
    const[nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")
    const[celular,setCelular]=useState("")
    const[email,setEmail]=useState("")
    const[emailConfirmacion,setEmailConfirmacion]=useState("")
    const[error,setError]=useState("")
    const[orderId,setOrderId]=useState("")

    const handleForm = (e) =>{
        e.preventDefault();
        
        if(!nombre || !apellido || !celular || !email || !emailConfirmacion){
            setError("Hay campos sin completar");
            return;
        }
        if(email !== emailConfirmacion){ 
            setError("Los emails no coinciden")
            return;
        }
        const db = getFirestore();
        const order = {
            items:cart.map((product)=>({
            id:product.product.id,
            name:product.product.name,
            quantity:product.quantity,
            stock:product.product.stock
            })),
            total: totalCart(),
            date: new Date(),
            nombre,
            apellido,
            celular,
            email
        };
        Promise.all(
            order.items.map(async(productOrder)=>{
                const productRef = doc(db,"item", productOrder.id)
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;
                await updateDoc(productRef,{
                    stock:stock - productOrder.quantity,
                });
            })
        ).then(()=>{
            addDoc(collection(db,"order"),order)
            .then((docRef)=>{
                setOrderId( {id:docRef.id,...order});
                clearCart();
                
                

            })
            .catch((error)=>{
                console.log("Error updating stock",error);
                setError("No se puede actualizar el stock, intentelo nuevamente");
            })

        })
        .catch((error)=>{
            console.log("Error updating stock",error);
            setError("No se puede actualizar el stock, intentelo nuevamente");
        });
    };

return (
    <div>

    <h2>Ingresa tus datos</h2>

    <div>{cart.map((product)=>(
        <div key={product.product.id}>
            <p>{""}{product.product.name}</p>
            <p>Cantidad de prendas:{product.quantity}</p>
            <p>${product.product.price * product.quantity}</p>
            
            <hr/>
        </div>
    ))}</div>

    <form onSubmit={handleForm}>
        <div>
            <label htmlFor="">Nombre:</label>
            <input type="text" onChange={(e)=>setNombre(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Apellido:</label>
            <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Celular:</label>
            <input type="number" onChange={(e)=>setCelular(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Email de confirmacion:</label>
            <input type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
        </div>
        <button type='submit'>COMPRAR</button>


        {error && <p>{error}</p>}
        {orderId && (
            <p>
                Gracias por su compra! Tu numero de orden es: {orderId.id}
                
            </p>
            
        )}
    
    </form>
    </div>
)
}

export default Checkout
