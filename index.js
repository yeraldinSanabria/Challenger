//var encriptar = document.getElementById('encriptar')
//var texto = document.getElementById('texto');

//encriptar.addEventListener('click', () => {
  //  mensajeEncriptar(texto.value)
//})


const textArea = document.querySelector(".texto-recibido")
const mensaje = document.querySelector("#textoDos")


function ocultar(){
    const ocultarDos = document.getElementById("texto-desifrado")
    ocultarDos.classList.add("none");

}

function mostrar(){
    const mostarDos = document.getElementById("none")
    mostarDos.classList.remove("none");
    mostarDos.classList.add("block");

}

function botonEncriptar(){
    const texto = mensajeEncriptar(textArea.value)
    mensaje.value = texto;
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
