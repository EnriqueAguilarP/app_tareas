import React, { useState} from "react";
import '../hojaEstilos/Formulario.css';

function Formulario(props){
    const [input, setInput] = useState('');

    const manejarCambio = evento => {
        setInput(evento.target.value);
    }

    const manejarEnvio = evento => {
        evento.preventDefault();
        const tareaNueva = {
            id: ,
            texto: input,
            finalizada: false
        }
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