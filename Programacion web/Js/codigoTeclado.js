document.addEventListener("keydown", function(event) {
    // Obtener el carácter y el código ASCII de la tecla presionada
    const caracter = event.key;
    const codigo = event.keyCode;

    // Actualizar el contenido de los elementos HTML
    document.getElementById("caracter").textContent = `[${caracter}]`;
    document.getElementById("codigo").textContent = `[${codigo}]`;
});
