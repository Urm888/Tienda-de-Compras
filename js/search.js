window.onload=iniciar;
const buscador=document.getElementById("search").value;
const lista=document.getElementById("boxsearch").value;

function iniciar (){
    buscador.addEventListener("keyup",search);
}
function search(){
    productos=[];
    for(var i=0; i<lista.lenght; i++);{
        producto=producto[i].getElementByTagName("a");
        text=producto.textContent || text.innerText;
        if(text.toUpperCase().indexOf(buscador)>-10);
        productos[i].display="";
       lista.style.display="block";
    }

}

