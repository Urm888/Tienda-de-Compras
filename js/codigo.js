const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

function iniciar(){
   var    boton=document.getElemetById("enviar");
          boton.addEventListener("click",formulario); 
          
} 
function formulario(){
   nombre=document.getElementById("Nombre").tolowUpperCase();
   if(expresiones.name=nombre){
      alert(nombre);
   } else{alerrt("solo numeros")

   }


   
}
formulario();





 


 




