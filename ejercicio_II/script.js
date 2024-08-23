const escribir = document.getElementById("escribir");
const boton = document.getElementById("botonAgregar");
const lisComentarios = document.getElementById("listaComentarios");

function clickBoton(){
    const escribirC = escribir.value;
    const comentarioNuevo = document.createElement("li");
    
    comentarioNuevo.textContent = escribirC;

    comentarioNuevo.addEventListener("dblclick", function(){
        lisComentarios.removeChild(comentarioNuevo);
    });

    lisComentarios.appendChild(comentarioNuevo);
    escribir.value = "";
}
boton.addEventListener("click", clickBoton);