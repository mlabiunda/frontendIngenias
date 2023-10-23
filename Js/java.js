//  FUNCION CALCULADORA HUELLA  //

function Huella () {

  var Electrodomestico = document.getElementById("Electrodomestico").value;
  var Electronica = document.getElementById("Electronica").value;
  var Refrigeracion = document.getElementById("Refrigeracion").value;
  var Calefaccion = document.getElementById("Calefaccion").value;
  var TransporteP = document.getElementById("TransporteP").value;
  var TransporteE = document.getElementById("TransporteE").value;
 

  var mensajesError = [];

  if (Electrodomestico =="" || Electronica =="" || Refrigeracion =="" ||
   Calefaccion == "" || TransporteP =="" || TransporteE =="")
   {

   mensajesError.push("Completa este campo");
    error.innerHTML = mensajesError.join(" , ");


  } else {

      const array = [ Electrodomestico, Electronica, Refrigeracion, Calefaccion, TransporteP, TransporteE];
     
     
      const suma = array.reduce((valorAnterior, valorActual) => {
        return parseFloat(valorAnterior) + parseFloat(valorActual) }, 0);
     
      alert ("tu huella es de " + suma + " unidades. ¡¡Cuida el Planeta!!")

      var error = document.getElementById("error3");
      
  }
 

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
            console.log (jsondata)
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

      let productosJson = `[
        {
          "prodId": 0,
          "nombreProducto": "Humus",
          "precio": "500",
          "imagen": "img/humus de lombriz.jpg"
        },
        {
          "prodId": 1,
          "nombreProducto": "Semillas",
          "precio": "$400",
          "imagen": "img/granos.jpg"
        },
        {
          "prodId": 2,
          "nombreProducto": "Compostera",
          "precio": "1000",
          "imagen": "img/compostera.jpg"
        },
        {
          "prodId": 3,
          "nombreProducto": "Regadera",
          "precio": "800",
          "imagen": "img/regadera.jpg"
        },
        {
          "prodId": 4,
          "nombreProducto": "Cestos de basura",
          "precio": "1100",
          "imagen": "img/cestosresiduos.jpg"
        },
        {
          "prodId": 5,
          "nombreProducto": "Bolsas de residuo",
          "precio": "600",
          "imagen": "img/bolsas.jpg"
        }
      ]`

      let productosArray = JSON.parse(productosJson);

      // Ver los productos en Tienda //
      for (let i=0; i<productosArray.length; i++) {
        let producto = document.createElement("article");
        producto.className = "item-box";
        let divImagen = document.createElement("div");
        divImagen.className = "item-box-img";
        let imagen = document.createElement("img");
        imagen.className = "item-img";
        
        let nombreProducto = document.createElement("h4");
        nombreProducto.className = "item-title";
        let precio = document.createElement("h4");
        precio.className = "item-text";
        let botonComprar = document.createElement("button");
        botonComprar.setAttribute("prodId", i);
        botonComprar.addEventListener("click", agregarAlCarrito);
      
        imagen.src = productosArray[i].imagen;
        nombreProducto.innerText = productosArray[i].nombreProducto;
        precio.innerText = productosArray[i].precio;
        botonComprar.innerText = "Agregar";
        botonComprar.className = "button";
      
        divImagen.appendChild(imagen);
        producto.appendChild(divImagen);
        producto.appendChild(nombreProducto);
        producto.appendChild(precio);
        producto.appendChild(botonComprar);
      
        document.querySelector("div.lista").appendChild(producto);
      }
      
      
      // Carrito de compras //
      let carrito = [];
      
      function agregarAlCarrito(botonClickeado) {
        let productosElegidos = [];
        productosElegidos.push(botonClickeado.target.getAttribute("prodId"));
        let numeroProducto = Number(botonClickeado.target.getAttribute("prodId"));
        carrito.push(productosArray[numeroProducto]);
        document.getElementById('verCarrito').disabled = false;
        console.log(carrito);
        return carrito; 
      }
      
      function armarCarrito () {
        document.querySelector("#mostrar-carrito").classList.remove('oculto');
        let comprado = document.createElement("div");
        comprado.className = "listado-compra";
        let tituloCompra = document.createElement("h5");
        tituloCompra.className = 'titulo-carrito';
        tituloCompra.innerText ="TU CARRITO CONTIENE:";
        let listaCompra = document.createElement("ul");
        for (let x=0; x<carrito.length;x++) {
          listaCompra.innerHTML += `<li>
          <img src="${carrito[x].imagen}" width="50px" height="50px" alt="">
          <p>${carrito[x].nombreProducto}</p>
          <p>1 u.</p>
          <p>$${carrito[x].precio}</p>
          </li>`;
        };
        
        // valor total de la compra //
        let totalDeCompra = document.createElement('h5');
        let total = 0;
        for (let x=0; x<carrito.length;x++) {
          let importe = Number(carrito[x].precio);
          total += importe;
        };
        totalDeCompra.innerText = `El total de tu compra es $${total}`;
        
        // agregamos contenido a la tienda//
        let divCompra = document.querySelector("#mostrar-carrito");
        divCompra.appendChild(tituloCompra);
        divCompra.appendChild(comprado);
        comprado.appendChild(listaCompra);
        comprado.appendChild(totalDeCompra);

        // Boton de confirmar compra  //
        document.getElementById('confirmar-compra').classList.remove('oculto');
      };
      
      
      // Ver carrito//
      let verCarrito = document.getElementById("verCarrito");
      
      verCarrito.onclick = function () {
      // Boton de Borrar el carrito //
        if (carrito.length != 0) {
          document.getElementById("eliminarCarrito").disabled = false;
        } else {
          document.getElementById("eliminarCarrito").disabled = true;
        };
      
        armarCarrito();
        document.getElementById('verCarrito').classList.add('oculto');
        document.getElementById('agregarProductos').classList.remove('oculto');
      };
      
      
      let agregarProductosAlCarrito = document.getElementById('agregarProductos');
      agregarProductosAlCarrito.onclick = function () {
       
        document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.titulo-carrito'));
        document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.listado-compra'));
        armarCarrito();
        };
       
        
      
      // Borro carrito //
      let borrarCarrito = document.getElementById("eliminarCarrito");
      
      borrarCarrito.onclick = function (e) {
        e.preventDefault();
        for (let i = 0;carrito.length;i++) {
          carrito.pop();
        }
        
        document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.titulo-carrito'));
        document.querySelector("#mostrar-carrito").removeChild(document.querySelector('.listado-compra'));
        document.querySelector("#mostrar-carrito").classList.add('oculto');
        document.getElementById('verCarrito').classList.remove('oculto');
        document.getElementById('agregarProductos').classList.add('oculto');
        document.getElementById('confirmar-compra').classList.add('oculto');
      
        document.getElementById('verCarrito').disabled = true;
        document.getElementById("eliminarCarrito").disabled = true;
      };
      
      