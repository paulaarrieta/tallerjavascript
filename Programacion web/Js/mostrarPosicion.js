document.addEventListener("mousemove", function(event) {
    // Obtener la posición del ratón en relación a la ventana del navegador
    const posNavegador = `[${event.clientX}, ${event.clientY}]`;
    
    // Obtener la posición del ratón en relación a toda la página
    const posPagina = `[${event.pageX}, ${event.pageY}]`;
    
    // Actualizar el contenido de los elementos HTML
    document.getElementById("posicion-navegador").textContent = posNavegador;
    document.getElementById("posicion-pagina").textContent = posPagina;
});
