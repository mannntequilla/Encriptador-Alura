
const input = document.querySelector(".input");
const output = document.querySelector(".output-encriptado");

function asignarTexto(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML= texto;
    }

// Llamando funcion
asignarTexto('titulo', 'Ningún mensaje fue encontrado');
asignarTexto('parrafo', 'Ingresa el texto que desees encriptar o desencriptar.')



function encriptarMensaje(){
    const textoEncriptado = encriptar(input.value);
    const mensaje = document.querySelector(".mensaje");
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
            
    }

    
    function copiarAlPortapapeles() {
    // Seleccionar el contenido del área de texto output
    output.select();
    output.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        // Intentar usar la API moderna del portapapeles
        navigator.clipboard.writeText(output.value)
            .then(() => {
                alert('Texto copiado al portapapeles');
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