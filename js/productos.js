//tabla
let botonEnviar = document.querySelector('#boton_enviar');

botonEnviar.onmouseenter = () => {
    botonEnviar.style.backgroundColor = "orange";
    botonEnviar.style.color = "white";
};

botonEnviar.onmouseleave = () => {
    botonEnviar.style.backgroundColor = "white";
    botonEnviar.style.color = "black";
};

botonEnviar.onclick = function (event) {
    event.preventDefault();

    let formulario = document.getElementById("formulario");

    if (!formulario.checkValidity()) {
        formulario.reportValidity(); // vuelve a mostrar las alertas del formulario
        return; // no continua si hay errores
    }

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let cedula = document.getElementById('cedula').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let direccion = document.getElementById('direccion').value;
    let auto = document.getElementById('auto').value;
    let pago = document.querySelector('input[name= "pago"]:checked')?.value || "No seleccionado";

    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${cedula}</td>
    <td>${telefono}</td>
    <td>${email}</td>
    <td>${direccion}</td>
    <td>${auto}</td>
    <td>${pago}</td>
    `;
    alert("Datos agregados a la tabla");
    document.querySelector("table tbody").appendChild(nuevaFila);
    document.getElementById("formulario").reset();//limpiar el formulario
};