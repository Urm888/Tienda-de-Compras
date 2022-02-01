window.onload=iniciar;
const buscador=document.querySelector("#search");
const caja=document.querySelector("#boxsearch");


const productos=[
    {nombre: "Adidas"},
    {nombre: "Abrigo"},
    {nombre: "Almohada"},
    {nombre: "Cafetera"},
    {nombre: "DC"},
    {nombre: "Esmeril"},
    {nombre: "Hisense"},
    {nombre: "Jordan"},
    {nombre: "Licuadora"},
    {nombre: "Lavadoras"},
    {nombre: "Laptop"},
    {nombre: "Martillo"},
    {nombre: "Microondas"},
    {nombre: "Nike"},
    {nombre: "Samsung"},
    {nombre: "Tostadora"},
    {nombre: "Vans"}, 
    {nombre: "Vino"},
    {nombre: "Zapatos"},
]

function iniciar(){
    filtro=document.querySelector("#iconsearch");   
    buscador.addEventListener("keyup",menu);
}

function menu(){
    caja.innerHTML=``;
    busqueda=buscador.value.toLowerCase();
    for( let producto of productos){ 
        let lista=producto.nombre.toLowerCase();
        if(lista.indexOf(busqueda) !==-1){
            caja.innerHTML +=`<li>${producto.nombre}</li>`
            caja.style.display="block";
            if(search.value ===""){
                caja.style.display="none";
            }            
     }
    }

  }








 

