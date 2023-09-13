let nombre = prompt("Introduce tu nombre");
if (typeof nombre === "string")
nombre = nombre.trim()
if(nombre) {
    alert("Bienvenido/a a Energia VIva," + nombre + ".");
}
if (nombre === ""){
    alert("No has introducido nada. Recarga la página para intentarlo de nuevo")
} else if (nombre === null){
    alert("Has presionado cancel. Recarga la página para intentarlo de nuevo")
}