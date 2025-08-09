const GuardarEnStorage = (peli) => {
    // 1. Obtener lo que ya hay en localStorage
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    // 2. Verificar si ya hay un array válido
    if (Array.isArray(elementos)) {
        // Añadir la nueva peli al array
        elementos.push(peli);
    } else {
        // Si no existe, crear uno con esta única peli
        elementos = [peli];
    }

    // 3. Guardar el array actualizado en localStorage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    // 4. Retornar la peli guardada
    return peli;
};

export default GuardarEnStorage;
