// Para que el label se quede fijo cuando el input tenga texto dentro 
var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function() {
    if(this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
};

document.getElementById('verPassword').onclick = function() {
    var cambio = document.getElementById('password');

    if(cambio.getAttribute("type") == "password") {
        cambio.setAttribute("type","text");
    } else {
        cambio.setAttribute("type","password");
    }
}