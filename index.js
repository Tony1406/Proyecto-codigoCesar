function generarTexto(event) {
    event.preventDefault();

    let textoInput = document.querySelector('#inputTarea').value;
    let textoModificado = textoInput;

    if (textoInput.includes("a")) {
        textoModificado = textoModificado.replace(/a/g, 'b'); // Corregir aquí
    }

    if (textoInput.includes("b")) {
        textoModificado = textoModificado.replace(/b/g, 'c'); // Corregir aquí
    }

    let nuevoElemento = document.querySelector("#codigoCreado");
    nuevoElemento.textContent = textoModificado;
}