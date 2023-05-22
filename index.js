const textArea = document.querySelector(".texto-recibido")
const mensaje = document.querySelector("#textoDos")


function ocultar() {
    const ocultarDos = document.getElementById("texto-desifrado")
    ocultarDos.classList.add("none");
}

function mostrar() {
    const mostarDos = document.getElementById("none")
    mostarDos.classList.remove("none");
    mostarDos.classList.add("block");

}

function botonEncriptar() {
    const texto = mensajeEncriptar(textArea.value)
    mensaje.value = texto;
    textArea.value = "";
    ocultar();
    mostrar();

}

function mensajeEncriptar(textoEncriptador) {
    let codigoEncriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ]
    textoEncriptador = textoEncriptador.toLowerCase()

    for (let i = 0; i < codigoEncriptar.length; i++) {
        if (textoEncriptador.includes(codigoEncriptar[i][0])) {
            textoEncriptador = textoEncriptador.replaceAll(codigoEncriptar[i][0], codigoEncriptar[i][1])
        }
    }
    return textoEncriptador
}

function botonDesencriptar() {
    const texto = mensajeDesencriptar(textArea.value)
    mensaje.value = texto;
    textArea.value = "";
}

function botonDesencriptar() {
    const texto = document.getElementById("texto").value
    document.getElementById("textoDos").value = mensajeDesencriptar(texto)
    textArea.value = "";
}


function copiar() {
    let textoD = document.getElementById("textoDos").value;
    document.getElementById("texto").value = textoD
    
}


function mensajeDesencriptar(textoDesencriptador) {
    let codigoEncriptar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ]
    textoDesencriptador = textoDesencriptador.toLowerCase()

    for (let i = 0; i < codigoEncriptar.length; i++) {
        if (textoDesencriptador.includes(codigoEncriptar[i][1])) {
            textoDesencriptador = textoDesencriptador.replaceAll(codigoEncriptar[i][1], codigoEncriptar[i][0])
        }
    }
    return textoDesencriptador
}