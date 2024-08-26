
const input = document.querySelector(".input");
const output = document.querySelector(".output-encriptado");
const mensaje = document.querySelector(".mensaje");
const loader = document.querySelector(".loader");


function asignarTexto(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML= texto;
    }

// Llamando funcion
asignarTexto('titulo', 'Ningún mensaje fue encontrado');
asignarTexto('parrafo', 'Ingresa el texto que desees encriptar o desencriptar.')


let typingTimer; // Timer para detectar el fin de la escritura
let muneco = document.querySelector(".muneco");
let tituloDefault = document.querySelector("h2");
let parrafoDefault = document.querySelector("p");

const typingInterval = 1000; // Tiempo en milisegundos para considerar que ha dejado de escribir

input.addEventListener('input', function() {
    clearTimeout(typingTimer); // Reinicia el temporizador
    loader.style.display = 'block'; // Muestra el loader
    muneco.style.display = "none";
    tituloDefault.style.display= "none";
    parrafoDefault.style.display= "none";

   
    // Configura el temporizador para ocultar el loader si el usuario deja de tipear
    typingTimer = setTimeout(() => {
        loader.style.display = "";
       
    }, typingInterval);
});


function encriptarMensaje(){
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado
    input.value="";
    mensaje.style.display = "none"  
}

function encriptar(stringEncriptada){
let matriz = [["e", "enter"],["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i< matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncriptada
}

// Funcion para desencriptar
function desencriptar(stringDesencriptada){
    let matriz = [["e", "enter"],["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for(
        let i=0; i< matriz.length; i++){
            if(stringDesencriptada.includes(matriz[i][1])){
                stringDesencriptada =stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0])
            }
        }
        return stringDesencriptada
    }
    

    function desencriptarMensaje(){
        const textoEncriptado = desencriptar(input.value)
        output.value = textoEncriptado;
        input.value = "";
            
    }

    
    function copiarAlPortapapeles() {
    // Seleccionar el contenido del área de texto output
    output.select();
    output.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        // Intentar usar la API moderna del portapapeles
        navigator.clipboard.writeText(output.value)
            .then(() => {
                console.log('Texto copiado');
            })
            .catch(err => {
                console.error('Error al copiar el texto', err);
                // Método de respaldo si la API moderna falla
                fallbackCopy(output);
            });
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
        // Método de respaldo si ocurre un error inesperado
        fallbackCopy(output);
    }
}

// Función para recargar la página
function reiniciarJuego() {
    location.reload(); // Recarga la página
}

// Añadir el event listener al logo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    let logo = document.getElementById("logo");
    logo.addEventListener("click", reiniciarJuego);
});


