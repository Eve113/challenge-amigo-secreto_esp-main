let Participantes = []
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    Participantes.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Actualizar la lista en la página
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre como <li>
    for (let i = 0; i < Participantes.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = Participantes[i]; // Asignar el nombre al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}


function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (Participantes.length === 0) {
        alert("No hay participantes en la lista. Agrega nombres antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * Participantes.length);

    // Obtener el nombre sorteado
    let amigoSorteado = Participantes[indiceAleatorio];

    // Mostrar el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
}

