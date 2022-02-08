/** TODO: JS para proyecto TimeInn */
import {comprovar} from './formularios.mjs'

window.onload = function() {

  /** TODO: variables para el menu */
  let menu = document.querySelector('#menu');

  let menu_burger = document.querySelector('#menu-burger');

      menu_burger.addEventListener('click', function() {
          //Para que pueda saltar entre clases 'toggle'
          menu.classList.toggle('menu-toggle');
      });

  
  /** TODO: variable para el calendario*/
  let day = document.querySelector('#days');
  

  //Crear el boton:
  mybutton = document.getElementById("myBtn");

  // Que aparezca el borón al bajar
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // añadimos funcionalidad al botón
  document.getElementById("myBtn").onclick = function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  // cookie + popup

  function Cookies(){
    var galleta = document.cookie;
    if (galleta == "") {
        console.log("No hay galleta")
        setTimeout(function () {
            //alert de aceptar galletas
            
            // var objetivo = document.getElementsByClassName("home");

            const body = document.getElementsByTagName("body");
            let cookieOverlay = document.createElement("button");
            let cookieOverlaytext = document.createElement("p");
            let cookieParent = document.createElement("div");

            cookieOverlay.classList.add("cookieOverlay");
            cookieParent.classList.add("cookieParent");
            cookieOverlaytext.classList.add("botonCookie");
            cookieOverlay.setAttribute("onclick", "aceptarCookie()");
            cookieOverlaytext.innerHTML = "Aceptar Cookie" ;

            document.body.appendChild(cookieParent);
            cookieParent.appendChild(cookieOverlay);
            cookieOverlay.appendChild(cookieOverlaytext);
            // objetivo.insertBefore(cookieOverlay, objetivo [0]);



            cookieOverlay.onclick = function (){
                aceptarCookie()
            }
        }, 3000)
    }
}

document.getElementById("btnCookie").onclick = function aceptarCookie(){
    let cookieParent = document.querySelector(".cookieParent");
    var fechaGalleta = new Date();
    fechaGalleta.setTime(fechaGalleta.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "expires=" + fechaGalleta.toUTCString() + ";"
    document.body.removeChild(cookieParent);
}

// Cookies();

// Creación del array de usuarios

// También he probado meterlo en el "onload" del principio del archivo
let usuarios = [
  {
    "nombre": "Usuario1",
    "email": "usuario1@gmail.com",
    "contraseña": "Usuario1",
  }
]
document.addEventListener("submit",comprovar())
document.addEventListener("submit", function logear(){
  console.log("el addvenet funciona")
  var Email = document.getElementById("email").value;
  var Contr = document.getElementById("password").value;
  let user = usuarios.find(u => u.email === Email);
  if ( Contr == user.contraseña){
    let nombreusuario =user.nombre;
    localStorage.setItem("nombre", nombreusuario);
  };
});


  // function logeado (){
  //   var local = localStorage.getItem("nombre");
  //   const para = document.createElement("p");
  //   const node = document.createTextNode("Hola" + nombreusuario);
  //   para.appendChild(node);

  //   const element = document.getElementsByTagName("h1");
  //   element.appendChild(para);
    
  // }
  // logeado();



}

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay-home'),
	popup = document.getElementById('popup-home'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
});









document.getElementById("formulario").addEventListener("submit", comprovar());
