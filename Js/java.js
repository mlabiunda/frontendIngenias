/*let nombre = prompt("Introduce tu nombre");
if (typeof nombre === "string")
nombre = nombre.trim()
if(nombre) {
    alert("Bienvenido/a a Energia VIva," + nombre + ".");
}
if (nombre === ""){
    alert("No has introducido nada. Recarga la página para intentarlo de nuevo")
} else if (nombre === null){
    alert("Has presionado cancel. Recarga la página para intentarlo de nuevo")
}*/

// calculadora  //

var Electrodomestico = document.getElementById(Electrodomestico);
var Electronica = document.getElementById(Electronica);
var Refrigeracion = document.getElementById(Refrigeracion);
var Calefaccion = document.getElementById(Calefaccion);
var TransporteP = document.getElementById(TransporteP);
var TransporteE = document.getElementById(TransporteE);
var error = document.getElementById(error);
error.style.color = "red";
function enviarFormulario ()  {
  var mensajesError = []
  if(Electrodomestico.value === null || Electrodomestico.value === " ")
   {mensajesError.push("ingresa las hs");}
  if(Electronica.value === null || Electronica.value === " ")
      {mensajesError.push("ingresa las hs");}
  if(Refrigeracion.value === null || Refrigeracion.value === " ")
      {mensajesError.push("ingresa las hs");}
  if(Calefaccion.value === null || Calefaccion.value === " ")
      {mensajesError.push("ingresa las hs");}
  if(TransporteP.value === null || TransporteP.value === " ")
      {mensajesError.push("ingresa las hs");}  
  if(TransporteE.value === null || TransporteE.value === " ")
      {mensajesError.push("ingresa las hs");}
      
     error.innerHTML = mensajesError.join(" , ");

  return false;
}
  
//  Formulario Registro  //

var nombre = document.getElementById(nombre);
var correo = document.getElementById(correo);
var telefono = document.getElementById(telefono);
var error = document.getElementById(error);
error.style.color = "red";
var form = document.getElementById(formuRegistro);
form.addEventListener(submit, function (evt){
  evt.preventDefault();
var mensajesError = [];
if(nombre.value === null || nombre.value === " "){
  mensajesError.push("ingresa tu Nombre");
}
if(correo.value === null || correo.value === " "){
  mensajesError.push("ingresa tu correo");
}
if(telefono.value === null || telefono.value === " "){
  mensajesError.push("ingresa tu Nombre");
}
error.innerhtml = mensajesError.join(", ")});

//  Formulario Sesion  //

var usuario = document.getElementById(usuario);
var palabraSecreta = document.getElementById(palabraSecreta);
var error = document.getElementById(error);
error.style.color = "red";
var form = document.getElementById(formuSesion);
form.addEventListener(submit, function (evt){
  evt.preventDefault();
var mensajesError = [];
if(usuario.value === null || usuario.value === " "){
  mensajesError.push("ingresa tu Usuario");
}
if(palabraSecreta.value === null || palabraSecreta.value === " "){
  mensajesError.push("ingresa tu contraseña");
}

error.innerhtml = mensajesError.join(", ")});

//  Json  //

let formularioSesion = [
  {
usuario,
palabraSecreta,
  }
];
guardarInformacion(formularioSesion);

function guardarInformacion(formularioSesion) {
  let jsonFormularioSesion = JSON.stringify(formularioSesion);

  localStorage.setItem(formularioSesion, jsonformualrioSesion);
  
}

let formularioReg = [
  {
    nombre,
    correo,
    telefono,
  }
];
guardarInformacion(formularioReg);

function guardarInformacion(formularioReg) {
  let jsonFormularioReg = JSON.stringify(formularioReg);

  localStorage.setItem(formularioReg, jsonFormularioReg);
}