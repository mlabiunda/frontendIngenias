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
     
      alert ("tu huella es: " + suma)

    
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


  

    
//  Validación del Formulario Registro  //

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

  



     
    

     
    
//  Validación del Formulario Sesion  //

/*function enviarFormSes ()  {

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
    }   */
  
  
    //  Guardado de información que carga el usuario en el Local Storage y luego se la muestro (aramdo del Avatar)//

    function guardarDatos(){
      localStorage.usuario = document.getElementById("usuario").value;
      localStorage.Select1 = document.getElementById("Select1").value;
     }
     
     function recuperarDatos(){
      if ((localStorage.usuario != undefined) && (localStorage.Select1 != undefined)) {
       document.getElementById("datos").innerHTML = "Nombre del Avatar: " + localStorage.usuario + "<br/> Color: " + localStorage.Select1;
      }
    }
      
     

     // API de cantidad de carbono en la atmosfera //

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

      //Json tienda//

        let jsonDeProductos = `[
        {
          "titulo": "Humus",
          "precio": "$500",
          "imagen": "img/humus de lombriz.jpg"
        },
        {
          "titulo": "Semillas",
          "precio": "$400",
          "imagen": "img/semillas.jpg"
        },
        {
          "titulo": "Compostera",
          "precio": "$1000",
          "imagen": "img/compostera.jpg"
        },
        {
          "titulo": "libro de composta",
          "precio": "$800",
          "imagen": "img/librocomposta.jpg"
        },
        {
          "titulo": "Cesto basura",
          "precio": "$11000",
          "imagen": "img/cestoverde.jpg"
        },
        {
          "titulo": "Bolsas de residuo",
          "precio": "$600",
          "imagen": "img/bolsas.jpg"
        }
      ]`

        
      
      let jsonConvertido = JSON.parse(jsonDeProductos)
        console.log(jsonDeProductos);
      
       //recorrer el array jsonConvertido
       for (let i = 0; i < jsonConvertido.length; i++){
           //crear un article
           let article = document.createElement("article")
           //crear h7
           let h7 = document.createElement("h7")
           h7.innerText = jsonConvertido[i].titulo
           //crear imagen
           let img = document.createElement("img")
           img.style.width = "25%"
           img.src = jsonConvertido[i].imagen
           //crear p
           let p = document.createElement("p")
           p.innerText = jsonConvertido[i].precio
           p.style.fontSize = "20px"
           //crear boton
           let boton = document.createElement("button")
           boton.classList.add ("botoncarrito")
           boton.innerText = "Agregar al carrito"
           boton.style.fontSize ="30"
          //terminar de armar el article
          article.appendChild(h7)
           article.appendChild(img)
           article.appendChild(p)
           article.appendChild(boton)
           //mandar el article a la seccion
          document.getElementById("productosTienda").appendChild(article)
       }
      
       // Agregar al carrito//

    window.onload = () => {
      let botones = document.querySelectorAll(".botoncarrito");
      for (let i = 0; i <= botones.length; i++)
      botones[i].addEventListener("click", e =>{
      
        localStorage.setItem("productoTitulo", jsonConvertido[i].titulo)
        localStorage.setItem("productoPrecio", jsonConvertido[i].precio)
        localStorage.setItem("productoImagen", jsonConvertido[i].imagen)
       
        let article = document.createElement("article")
        //crear titulo y precio
        let h7 = document.createElement("h7")
        h7.innerText = localStorage.getItem("productoTitulo")
        let p = document.createElement("p")
        p.innerText = localStorage.getItem ("productoPrecio")
        
        article.appendChild(h7)
        article.appendChild(p)
        
        document.getElementById("carrito").appendChild(article) 

      });
    };
  
  article.style.textAlign = center;

      
      

    
    
    
    