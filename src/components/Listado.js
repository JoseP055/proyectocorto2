import React, { useEffect } from 'react';

export const Listado = ({listadoState, setListadoState}) => {


    useEffect(() => {
        console.log('Componentes del listado de peliculas cargados correctamente');
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        setListadoState(peliculas);
        return peliculas;
    };

    const borrarPeli = (id) => {
        let pelis_almacenadas = conseguirPeliculas();
        let nuevo_listado = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        setListadoState(nuevo_listado);
        localStorage.setItem("pelis", JSON.stringify(nuevo_listado));
    }

    return (
        <>
        {
            listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit">Editar</button>
                            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>
                        </article>
                    );
                })
                : <h2>No hay películas para mostrar</h2>
        }
    </>
    )
}
