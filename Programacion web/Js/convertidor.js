// Tasa de conversión de dólar a peso (Hardcodeada)
const tasaConversion = 4000; // Aquí puedes cambiar la tasa según corresponda

function convertir() {
    // Obtener el valor ingresado por el usuario
    const dolares = document.getElementById("dolares").value;
    
    // Validar que el valor sea un número positivo
    if (dolares > 0) {
        // Realizar la conversión
        const pesos = dolares * tasaConversion;
        
        // Mostrar el resultado en el párrafo con id "resultado"
        document.getElementById("resultado").textContent = `El equivalente en pesos es: ${pesos.toFixed(2)} COP`;
    } else {
        // Mensaje de error si el valor no es válido
        document.getElementById("resultado").textContent = "Por favor, ingrese una cantidad válida en dólares.";
    }
}
