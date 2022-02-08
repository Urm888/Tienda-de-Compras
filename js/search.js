window.load = iniciar;

function iniciar(){
 const buscador=document.querySelector(`search`);
       buscador.addEventListener("click",buscar)
}

function buscar(){
  caja=buscador.value.toLowerCase();
  console.log(caja.value);
}








 

