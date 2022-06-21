import React from "react";
import { BiMinusCircle } from "react-icons/bi";
import '../hojaEstilos/Tarea.css';

function Tarea ({ id, texto, finalizada, finalizarTarea, eliminarTarea }) {
    return (
        <div className={ finalizada ? 'tarea-contenedor finalizada' : 'tarea-contenedor'}>
            <div className="tarea-texto"
            onClick={ () => finalizarTarea(id)}>
                {texto}
            </div>
            <div 
            className="tarea-contenedor-iconos"
            onClick={ () => eliminarTarea(id) }>
                <BiMinusCircle className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;