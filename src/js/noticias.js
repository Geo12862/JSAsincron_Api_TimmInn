window.onload = function(){
    crearEvento();
}
var img1 =  '../img/noticia1.jpg'

var img2 = "../img/noticia2.jpg"

var img3 = "../img/noticia3.jpg"

var img4 = "../img/noticia4.jpg"

var img5 = "../img/noticia5.jpg"

var img6 = "../img/noticia6.jpg"

var img7 = "../img/noticia7.jpg"

var img8 =  "../img/noticia8.jpg"

var img9 = "../img/noticia9.jpg"

var img10 = "../img/noticia9.jpg"

var img11 = "../img/evento1.jpg"

var img12 = "../img/evento2.jpg"

var img13 = "../img/evento3.jpg"

var img14 = "../img/evento4.jpg"

var img15 = "../img/evento5.jpg"

var img16 = "../img/evento6.jpg"

var img17 =  "../img/evento7.jpg"

var img18 =  "../img/evento8.jpg"


// Creación de noticias
let news = [
    {
        "titulo": "Eddie Redmayne no volvería a presentar La chica danesa",
        "fecha": "22-11-21",
        "promo": "si",
        "imagen": img1,
        "fuente": "https://www.diariodemallorca.es/ocio/cine/2021/11/22/eddie-redmayne-dice-volveria-protagonizar-59810296.html",

    },
    {
        "titulo": "Daniel Brühl, entre Marvel y el cine 'indie'",
        "fecha": "21-11-21",
        "promo": "si",
        "imagen": img2,
        "fuente": "https://www.diariodemallorca.es/ocio/cine/2021/11/21/daniel-bruhl-marvel-cine-indie-59787776.html",
    },
    {
        "titulo": "La mejor ensaladilla rusa de España se hace en Ronda",
        "fecha": "18-11-21",
        "promo": "no",
        "imagen": img3,
        "fuente": "https://www.diariodemallorca.es/ocio/gastronomia/2021/11/18/mejor-ensaladilla-rusa-espana-ronda-59671586.html",
    },
    {
        "titulo": "Por qué Red Hot Chili Peppers han agotado en días las entradas de su primer macroconcierto en España",
        "fecha": "15-11-21",
        "promo": "no",
        "imagen": img4,
        "fuente": "https://elpais.com/america/icon/2021-11-15/por-que-red-hot-chili-peppers-han-agotado-en-dias-las-entradas-de-su-primer-macroconcierto-en-espana.html",
    },
    {
        "titulo": "Al menos ocho personas mueren en una avalancha durante una actuación del rapero Travis Scott en Houston",
        "fecha": "06-11-21",
        "promo": "no",
        "imagen": img5,
        "fuente": "https://elpais.com/cultura/2021-11-06/al-menos-ocho-personas-mueren-en-una-avalancha-humana-en-un-festival-de-musica-en-houston.html",
    },
    {
        "titulo": "DANI MARTÍN - MALLORCA LIVE SUMMER - CALVIA",
        "fecha": "12-08-22",
        "promo": "si",
        "imagen": img6,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-dani-martin-mallorca-live-summer-calvia/",
    },
    {
        "titulo": "AITANA - 11 RAZONES TOUR - ZARAGOZA",
        "fecha": "26-11-21",
        "promo": "si",
        "imagen": img7,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-aitana-11-razones-tour-zaragoza-0000087Z70000087yO000008516/",
    },
    {
        "titulo": "MARC ANTHONY - OPUS TOUR - SEVILLA",
        "fecha": "23-06-22",
        "promo": "si",
        "imagen": img8,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-marc-anthony-opus-tour-sevilla-0000087l10000087K3000000002/",
    },
    {
        "titulo": "AEROSMITH EUROPEAN TOUR 2022 - MADRID",
        "fecha": "04-06-22",
        "promo": "no",
        "imagen": img9,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-aerosmith-european-tour-2022-madrid-0000087KR0000087kS0000085FE/",
    },
    {
        "titulo": "Festival Festival Cordoba No Duerme - CORDOBA",
        "fecha": "26-06-22",
        "promo": "no",
        "imagen": img10,
        "fuente": "https://www.elcorteingles.es/entradas/festivales/entradas-festival-cordoba-no-duerme-cordoba/",
    },
]

// Creación de eventos
let events = [
    // peliculas
    {
        "titulo": "The Vult",
        "fecha": "12-11-21",
        "promo": "no",
        "imagen": img11,
        "fuente": "https://www.aficine.com/ca/peliculas/way-down/?cineId=36",

    },
    {
        "titulo": "Last Night in Soho",
        "fecha": "9-2-22",
        "promo": "si",
        "imagen": img12,
        "fuente": "https://www.aficine.com/ca/peliculas/ultima-noche-en-el-soho/?cineId=36",

    },
    {
        "titulo": "Spencer",
        "fecha": "19-11-21",
        "promo": "si",
        "imagen": img13,
        "fuente": "https://www.aficine.com/ca/peliculas/spencer/",

    },
    {
        "titulo": "Antlers",
        "fecha": "26-12-21",
        "promo": "no",
        "imagen": img15,
        "fuente": "https://www.aficine.com/ca/peliculas/antlers-criatura-oscura/",

    },
    // conciertos
    {
        "titulo": "DANI MARTÍN - MALLORCA LIVE SUMMER - CALVIA",
        "fecha": "12-08-22",
        "promo": "si",
        "imagen": img6,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-dani-martin-mallorca-live-summer-calvia/",
    },
    {
        "titulo": "AITANA - 11 RAZONES TOUR - ZARAGOZA",
        "fecha": "26-11-21",
        "promo": "si",
        "imagen": img7,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-aitana-11-razones-tour-zaragoza-0000087Z70000087yO000008516/",
    },
    {
        "titulo": "MARC ANTHONY - OPUS TOUR - SEVILLA",
        "fecha": "23-06-22",
        "promo": "si",
        "imagen": img8,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-marc-anthony-opus-tour-sevilla-0000087l10000087K3000000002/",
    },
    {
        "titulo": "AEROSMITH EUROPEAN TOUR 2022 - MADRID",
        "fecha": "04-06-22",
        "promo": "no",
        "imagen": img9,
        "fuente": "https://www.elcorteingles.es/entradas/conciertos/entradas-aerosmith-european-tour-2022-madrid-0000087KR0000087kS0000085FE/",
    },

]


function crearEvento(){
    for (index=0; index < 3; index ++){
        var divPrincipal = document.createElement("div");
        divPrincipal.classList.add("card-evento");

        var div1 = document.createElement("div");
        div1.classList.add("card-imgE");
        div1.classList.add("card-E1");

        // var imagen = document.createElement("img");
        // imagen.src=events[index].imagen;
        // div1.appendChild(imagen);

        // Desc

        var div2 = document.createElement("div");
        div2.classList.add("descrip");

        var h3 = document.createElement("h3");
        h3.innerHTML = events[index].titulo;   //tocar aqui para llamar los datos




        div2.appendChild(h3);


        // mapa

        var div3 = document.createElement("div");
        div3.classList.add("mapa");

        var mapa = document.createElement("img");



        div3.appendChild(mapa);


        // papelera

        var div4 = document.createElement("div");
        div4.classList.add("papelera");

        var i1 = document.createElement("i");
        var i2 = document.createElement("i");

        i1.classList.add("far");
        i1.classList.add("fa-edit");
        i2.classList.add("fas");
        i2.classList.add("fa-trash-alt");
        i2.setAttribute("onclick", "eliminarNoticia()");


        div4.appendChild(i1);
        div4.appendChild(i2);


        var h4 = document.createElement("h4");
        h4.innerHTML=events[index].fecha;

        divPrincipal.appendChild(div1);
        divPrincipal.appendChild(div2);
        divPrincipal.appendChild(h4);
        divPrincipal.appendChild(div3);
        divPrincipal.appendChild(div4);

        var salida = document.getElementById("salida");

        salida.appendChild(divPrincipal);

    } 

    eliminarNoticia();

    // <div class="card-evento">
    //                 <div class="card-imgE card-E1">
    //                     <img src="" alt="">
    //                 </div>
    //                 <div class="descrip">
    //                     <h3><a href="">Título</a></h3>
    //                 </div>
    //                 <h4><a href="">Fecha</a></h4>
    //                 <div class="mapa">
    //                     <img src="" alt="" class="box-mapa">
    //                     <p class="direc">Dirección</p>
    //                 </div>
    //                 <div class="papelera">
    //                     <i class="far fa-edit" aria-hidden="true"></i>
    //                     <i class="fas fa-trash-alt" aria-hidden="true"></i>   
    //                 </div>
    //             </div>
}



function eliminarNoticia(){
    var papelera = document.getElementsByClassName("fa-trash-alt");

    for (let index = 0; index < papelera.length; index++) {
        papelera[index].onclick = function(){
            this.parentNode.parentNode.remove()
            events.splice(index, index)
        }
        
    }
}