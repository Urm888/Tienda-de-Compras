window.load = iniciar;
const search=document.querySelector("#search");
const icon=document.querySelector("#iconsearch");
const list=document.querySelector("#boxsearch");
      search.addEventListener("keyup",iniciar);
           

const articulos = [
      {nombre: `Adidas`},
      {0nombre: `Almohada`},
      {nombre: `Audifonos`},
]


function iniciar(){
    caja=search.value.toLowerCase();
    list.innerHTML=``;
  
   if(event.key  ==="Escape")event.target.value="";
   for(let articulo of articulos){
   let lista=articulo.nombre.toLowerCase();          
   if(lista.indexOf(caja) !== -1){
   list.style.display="block";        
   list.innerHTML += `<li><a href="Adidas.html"> ${articulo.nombre}</a></li>`
   
}
}          
              
  if(search.value ===""){
  list.style.display="none"
  
  
}
}
iniciar();



// El siguiente codigo Carrito de Compras



 

