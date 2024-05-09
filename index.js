function generarTexto(event) {
    event.preventDefault();

    let textoInput = document.querySelector('#inputTarea').value;
    let textoModificado = textoInput;

    // if (textoInput.includes("a")) {
    //     textoModificado = textoModificado.replace(/a/g, 'b'); 
    // }

    // if (textoInput.includes("b")) {
    //     textoModificado = textoModificado.replace(/b/g, 'c');
    // }

    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    let textoAMostrar = ""

    for (let i = 0; i < textoModificado.length; i++) {
        let index = abecedario.indexOf(textoModificado[i].toUpperCase());
        textoAMostrar = textoAMostrar + abecedario[index + 2]
    }

    let nuevoElemento = document.querySelector("#codigoCreado");
    nuevoElemento.textContent = textoAMostrar;
}

//hola 