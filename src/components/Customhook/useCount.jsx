import { useState } from "react";

const useCounter = (inicialValue,stock,onAdd) =>{
    const [count, setCount] = useState(inicialValue);
    
    const sumar = ()=>{
        if (count < stock )
            setCount(count + 1) //el "1" queda apartado para el stock del producto.
    }

    const restar = ()=>{
        if (count > inicialValue)
            setCount(count -1)

    }
    


    return{count,sumar,restar,onAdd};

}

export default useCounter