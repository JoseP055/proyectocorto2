import React, { useState } from 'react';
import guardarEnStorage from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        // Conseguir los datos del formulario
        const target = e.target;
        const titulo = target.titulo.value;
        const descripcion = target.descripcion.value;

        // Crear objeto de película
        const peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // Guardar en estado y en el localStorage
        setPeliState(peli);
        setListadoState(elementos => {
            return [...elementos, peli];
        });
        guardarEnStorage(peli);
        console.log(peli);

        alert(titulo + " - " + descripcion);
    };

    return (
        <div className="add">
            <h3 className="title">Añadir película</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la película: "+ titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" id="titulo" name="titulo" placeholder="Título" />
                <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    );
};
