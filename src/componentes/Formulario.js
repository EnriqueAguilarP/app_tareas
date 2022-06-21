import React, { useState } from "react";
import '../hojaEstilos/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){
    const [input, setInput] = useState('');

    const manejarCambio = evento => {
        setInput(evento.target.value);
    }

    const manejarEnvio = evento => {
        evento.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            finalizada: false
        }
        props.onSubmit(tareaNueva);
    }


    return(
        <form 
            className="formulario"
            onSubmit={manejarEnvio}>
            <input 
                className="input"
                type='text'
                placeholder='Escribe una tarea'
                name= 'texto'
                onChange= {manejarCambio}
            />
            <button className="boton">
                Agregar tarea
            </button>
        </form>
    );
}

export default Formulario;