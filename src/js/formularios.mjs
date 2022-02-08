export function comprovar(){
    var Email = document.getElementById("email").value;
    var Contr = document.getElementById("contrasenya").value;

    if (!(/[a-zA-Z_]{1}+([a-zA-Z0-9_]+)*@[a-z_]{5,10}*[.](com|net|gov)/.test(Email))){
        alert("La dirección de email no es válida");
        return false;
        // [a-z]{1,3} para acabar solo con 3 letras despues del punto
    }
    var espacios = false;
    var cont = 0;
    while (!espacios && (cont < Contr.length)) {
        if (Contr.charAt(cont) == " ")
        espacios = true;
        cont++;
    }
    if (espacios) {
        alert ("La contraseña no puede contener espacios en blanco");
        return false;
    }
    if (Contr.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
    }
    if(!(/((?:.*[A-Z]){1}(?:.*[a-z]){1}[A-Za-z]{4,8})+([0-9]{2})/.test(Contr))){
        alert("El formato de contraseña es incorrecto");
        return false;
    }

    /*Validaremos también el checkbox del formulario. Todos los
    checkbox tienen una propiedad llamada checked. Entonces
    hacemos el if y decimos que si nuestro checkbox NO está
    checked, estará mal.*/
    if(!document.getElementById('acepto').checked){
        todo_correcto = false;
    }
}


