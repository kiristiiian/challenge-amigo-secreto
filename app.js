// 1. Declarar el array de amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Actualizar lista en pantalla
    actualizarLista();
}

// 3. Función para actualizar la lista en la página
function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista previa

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

// 4. Función para sortear amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    // Seleccionar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`;
}
