import React,{useState} from 'react';

function ConHooks2 () {
   const [contador, setContador] =  useState(0)
   return (

    <div>
        <span>El Contador esta en {contador}</span>
        <br></br>
        <button className="contador2" onClick={() => setContador(contador + 2)}>
            Incrementar el contador 2
        </button>
        
    </div>
   )
}
export default ConHooks2