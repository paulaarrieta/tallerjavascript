function agregarEmpleado() {
    // Obtener los valores de los campos de entrada
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;

    // Verificar que ambos campos no estén vacíos
    if (codigo && nombre) {
        // Crear una nueva fila y celdas para el código y el nombre
        const tabla = document.getElementById("tabla-empleados");
        const fila = tabla.insertRow();
        const celdaCodigo = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);

        // Asignar los valores ingresados a las celdas
        celdaCodigo.textContent = codigo;
        celdaNombre.textContent = nombre;

        // Limpiar los campos del formulario
        document.getElementById("codigo").value = "";
        document.getElementById("nombre").value = "";
    } else {
        alert("Por favor, complete ambos campos.");
    }
}
