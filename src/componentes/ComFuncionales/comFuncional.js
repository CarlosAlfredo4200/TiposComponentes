import React from 'react';
import "./comFuncional.css";
/*Recibe props desde la clase */
const PokCard = (props)=>{
    return(
       <div>
           <h3 className="comfunc">{props.name}</h3>
           <p>Ataque</p>
       </div>
    )
}
export default PokCard;
