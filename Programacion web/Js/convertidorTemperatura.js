function convertirTemperatura() {
    // Obtener el valor ingresado por el usuario
    const centigrados = parseFloat(document.getElementById("centigrados").value);
    
    // Validar que el valor sea un número
    if (!isNaN(centigrados)) {
        // Realizar la conversión: (C * 9/5) + 32
        const fahrenheit = (centigrados * 9/5) + 32;
        
        // Mostrar el resultado en el campo de texto con id "resultado"
        document.getElementById("resultado").value = fahrenheit.toFixed(2) + " °F";
    } else {
        // Mensaje de error si el valor no es válido
        document.getElementById("resultado").value = "Entrada no válida";
    }
}
