import { useState } from "react";

const useCounter = (inicialValue,stock) =>{
    const [count, setCount] = useState(inicialValue);
    
    const sumar = ()=>{
        if (count < stock )
            setCount(count + 1) //el "1" queda apartado para el stock del producto.
    }

    const restar = ()=>{
        if (count > 1)
            setCount(count -1)

    }

    const addToCart = () =>{
        alert(`Se agregaron ${count} productos al carrito`)

    }
    return{count,sumar,restar,addToCart};

}

export default useCounter