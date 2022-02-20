//GET  all
let eventosContainer = document.getElementById("eventos");
if(eventosContainer){
    eventosContainer.onclick = function eventos(){
        fetch('http://localhost:3000/events')
            .then(response => response.json())
            .then(data => console.log(data))
    }
}



//GET one
let eventContainer = document.getElementById("eventoE");
if (eventContainer ){
    eventContainer.onclick = function evento(){
        fetch('http://localhost:3000/events/4')
            .then(response => response.json())
            .then(data => console.log(data))
    }
}



// POST: Create one
document.getElementById("crear").onclick = function crea(){
    fetch('http://localhost:3000/events', {
        method: 'POST',
        body: JSON.stringify({
            titulo: document.getElementById("tituloE").value,
            fecha: document.getElementById("fechaE").value,
            imagen: document.getElementById("imagenE").value,
            fuente: document.getElementById("fuenteE").value
            }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}


// DELETE one
let eliminar1 = document.getElementById("borrar1");
if (eliminar1){
    eliminar1.onclick = function eliminar(){
        let id = document.getElementById("borrar1").dataset.id;
        fetch('http://localhost:3000/events/' + `${id}`, {
            method: 'DELETE',
            
        })
        
        .then(response => { 
            if (response.status == "200") {
                console.log("Eliminat OK");
                document.getElementById("cardE1").style.display="none";
            }else {
                throw new Error(response.status)
            }
            response.json() 
        })
        .then(data => console.log(data))
    }
}

let eliminar2 = document.getElementById("borrar2");
if (eliminar2){
    eliminar2.onclick = function eliminar(){
        let id = document.getElementById("borrar2").dataset.id;
        fetch('http://localhost:3000/events/' + `${id}`, {
            method: 'DELETE',
            
        })
        .then(response => { 
            if (response.status == "200") {
                console.log("Eliminat OK");
            }else {
                throw new Error(response.status)
            }
            response.json() 
        })
        .then(data => console.log(data))
    }
}

let eliminar3 = document.getElementById("borrar3");
if (eliminar3){
    eliminar3.getElementById("borrar3").onclick = function eliminar(){
        let id = document.getElementById("borrar3").dataset.id;
        fetch('http://localhost:3000/events/' + `${id}`, {
            method: 'DELETE',
            
        })
        .then(response => { 
            if (response.status == "200") {
                console.log("Eliminat OK");
            }else {
                throw new Error(response.status)
            }
            response.json() 
        })
        .then(data => console.log(data))
    }
}


// PUT: modificar
document.getElementById("modif").addEventListener("click", e => {
    let id = e.target.dataset.id;
    console.log(id);
    fetch('http://localhost:3000/events/' + `${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        id: e,
        titulo: document.getElementById("tituloE").value,
        fecha: document.getElementById("fechaE").value,
        imagen: document.getElementById("imagenE").value,
        fuente: document.getElementById("fuenteE").value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
})


