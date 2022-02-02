window.onload=iniciar;
const buscador=document.querySelector("#search");
const caja=document.querySelector("#boxsearch");



const productos=[
    {nombre:"Adidas"}, {nombre: "Almohada"}, {nombre: "Audifonos"},
    {nombre: "Cafetera"},{nombre: "Cnc"},{nombre: "Controles"},
    {nombre: "DC"},
    {nombre: "Esmeril"},{nombre: "Escritorio"},
    {nombre: "Hisense"},
    {nombre: "Jordan"},
    {nombre: "Lavadoras"}, {nombre: "Lapiceras"}, {nombre: "Laptop"},    {nombre: "LG"},{nombre: "Licuadora"},
    {nombre: "Martillo"}, {nombre: "Microondas"},
    {nombre: "Nike"},
    {nombre: "Samsung"},
    {nombre: "Tostadora"},
    {nombre: "Vans"},{nombre: "Vino"},
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
            caja.style.display="block";
            if(search.value ===""){
                caja.style.display="none"; }            
                caja.innerHTML +=
                `<li><a href="Adidas.html">${producto.nombre}<a/></li>`;
                `<li><a href="Almohadas.html">${producto.nombre}<a/></li>`;
     }
    }
}











 

