import React from "react";
import '../hojaEstilos/Formulario.css';

function Formulario(props){
    return(
        <div className="formulario">
            <input 
                className="input"
                type='text'
                placeholder='Escribe una tarea'
                name= 'texto'
            />
            <button className="boton">
                Agregar tarea
            </button>
        </div>
    );
}

export default Formulario;