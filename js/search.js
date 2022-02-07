window.onload=iniciar;
const buscador=document.querySelector("#search");
const caja=document.querySelector("#boxsearch");


function iniciar(){
 buscador.value.toLowerCase();
 lista.addEventListenner("keyup",filtro);
}

function filtro(){
 console.log(lista.value);

}








 

