import { useState,useEffect } from "react";

function Application(val, initial = ''){

    const [storage,setStorage] = useState(()=>{
        
        const value = localStorage.getItem(val)

        return value!==null? value:initial
    })

    useEffect(()=>{
        localStorage.setItem(val,storage)

        sessionStorage.setItem(val,storage)

    },[val,storage])

    return [storage,setStorage]
    
}
export default Application