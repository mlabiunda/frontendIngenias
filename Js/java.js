//  FUNCION CALCULADORA HUELLA  //

function Huella () {

  var Electrodomestico = document.getElementById("Electrodomestico").value;
  var Electronica = document.getElementById("Electronica").value;
  var Refrigeracion = document.getElementById("Refrigeracion").value;
  var Calefaccion = document.getElementById("Calefaccion").value;
  var TransporteP = document.getElementById("TransporteP").value;
  var TransporteE = document.getElementById("TransporteE").value;

 

    const array = [ Electrodomestico, Electronica, Refrigeracion, Calefaccion, TransporteP, TransporteE];
    
    
    const suma = array.reduce((valorAnterior, valorActual) => {
      return parseFloat(valorAnterior) + parseFloat(valorActual) }, 0);


    alert("tu huella es: " + suma);

    var error = document.getElementById("error3");
    error.style.color = "green";
    error.style.textAlign = "center"
    error.style.fontSize = "40px"
 
  var mensajesError = []
  if (Electrodomestico.value !="" || Electronica.value !="" || Refrigeracion.value !="" || Calefaccion.value != "" || TransporteP.value !="" || TransporteE.value !="")
   {mensajesError.push("¡¡Cuida el Planeta!!");}
 
   error.innerHTML = mensajesError.join(" , ");
  
   return false;
     

}


  

    
//  Formulario Registro  //

function enviarFormulario ()  {

  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  var telefono = document.getElementById("telefono");

  var error = document.getElementById("error1");
  error.style.color = "green";

  var mensajesError = []
if(nombre.value === null || nombre.value === "")
 {mensajesError.push("ingresa tu nombre");}
if(correo.value === null || correo.value === "")
    {mensajesError.push("ingresa tu correo");}
if(telefono.value === null || telefono.value === "")
    {mensajesError.push("ingresa tu telefono");}
if(nombre.value !="" && correo.value !="" && telefono.value !=""){
  mensajesError.push("Te registraste con exito");
    }
    error.innerHTML = mensajesError.join(" , ");
    
    return false;
    }  

  //  Construccion de un nuevo objeto  //
{
  this.nombre = nombre
  this.correo = correo
  this.telefono = telefono
}
const formularioNuevo = new enviarFormulario("Roberto Fernandez", "rfernandez@gmail.com", "2214102578")


   
    //  estructura de datos Json convertida a Javascript  //

    
var formxx =
[
  {nombre:"Maria Gomez",correo:"mgomez@mail.com",telefono:"1144522677"},
   {nombre:"Juana Perez",correo:"jperez@mail.com",telefono:"1133524477"},
    {nombre:"Jose Lopez",correo:"jlopez@mail.com",telefono: "1144523344"},
    {nombre:"Juan Gonzalez",correo:"jgonzalez@mail.com",telefono:"1144522211"},
];
  
//console.log(formxx);
const result = JSON.stringify(formxx);
console.log(result);

//  Convierto Json a Java //
let JsonConvertido = JSON.parse(result);
console.log(JsonConvertido)

//  guardo en Local Storage //
localStorage.setItem(formxx,JsonConvertido);
console.log(localStorage.getItem("JsonConvertido"))

     
    

     
    
//  Formulario Sesion  //

function enviarFormSes ()  {

  var usuario = document.getElementById("usuario");
  var palabraSecreta = document.getElementById("palabraSecreta");
  
  var error = document.getElementById("error2");
  error.style.color = "green";

  var mensajesError = []
if(usuario.value === null || usuario.value === "")
 {mensajesError.push("ingresa tu usuario");}
if(palabraSecreta.value === null || palabraSecreta.value === "")
    {mensajesError.push("ingresa tu clave");}
if(usuario.value !="" && palabraSecreta.value !=""){
      mensajesError.push("Te logueaste con exito");
        }
    error.innerHTML = mensajesError.join(" , ");

    return false;
    }   
  
  
    //  Guardado de información que carga el usuario y luego se la muestro //

    function guardarDatos(){
      localStorage.usuario = document.getElementById("usuario").value;
      localStorage.palabraSecreta = document.getElementById("palabraSecreta").value;
     }
     
     function recuperarDatos(){
      if ((localStorage.usuario != undefined) && (localStorage.palabraSecreta != undefined)) {
       document.getElementById("datos").innerHTML = "Usuario: " + localStorage.usuario + "<br/> Password: " + localStorage.palabraSecreta;
      }
      else{
       document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
      }
     }

     // API de carbono en la atmosfera //
    function huellaAPI(){
      let jsondata;  

  var url='https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api';

  const options = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': 'c2ffd7b7e1msh12266397bd55dadp1e18f0jsn114b60e6b5bf',
  'X-RapidAPI-Host': 'daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com',
  },
  };

  
  fetch(url,options)
    .then(  
          function(u){ return u.json();}
        )
    .then(
          function(json){
            jsondata=json;
            var dia = jsondata.co2.at(-1).day;
            var mes = jsondata.co2.at(-1).month;
            var año = jsondata.co2.at(-1).year;
            var cycle = jsondata.co2.at(-1).cycle;
            var trend = jsondata.co2.at(-1).trend;
          
            var element = document.querySelector('#calchuella p');
            element.innerText="El valor de carbono en la atmosfera del " + dia + "/" + mes + "/" + año + " es de " + cycle + " unidades.";
              
        })
    .catch((error) => {console.log (error);}
      )}