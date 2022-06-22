import React, { useState } from "react";
import Formulario from "./Formulario";
import '../hojaEstilos/ListaTareas.css';
import Tarea from './Tarea';

function ListaTareas(){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ... tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }


    return(
        /*Uso fragmentos*/ 
        <>
            <Formulario onSubmit = {agregarTarea} />
            <div className="lista-tareas">
                {
                    tareas.map((tarea) => 
                        <Tarea 
                            key = {tarea.id}
                            id= {tarea.id}
                            texto = {tarea.texto}
                            finalizada = {tarea.finalizada}
                            eliminarTarea = {eliminarTarea}
                        />

                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;