window.onload=iniciar;
const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,15}$/, // 6 a 15 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cellphone: /^\d{7,14}$/ // 7 a 14 numeros.
}  
 const divInput=document.querySelectorAll(".input-contenedor");
 const form=document.getElementById("formulario");


 function iniciar(){
   booton=document.getElementById("enviar");
   booton.addEventListener("click",ejecutarBoton);}  

 function ejecutarBoton(e){    
   e.preventDefault();
   divInput.forEach((element)=>{
   element.lastElementChild.innerHTML="";});   
   validacionForm();
   mensajeDeError();
   mensajeDeEnvio();
}

  function validacionForm(){
   
   nombre=document.getElementById("nombre").value;
   if(!expresiones.name.test(nombre)){ 
    mensajeDeError("nombre","ERROR: Ingrese Su Nombre");}

   correo=document.getElementById("correo").value;
   if(!expresiones.email.test(correo)){
    mensajeDeError("correo","ERROR: Ingrese un correo Valido");}

   contraseña=document.getElementById("contraseña").value;
   if(!expresiones.password.test(contraseña)){
    mensajeDeError("contraseña","ERROR: El minimo de Caracteres validos son 6");} 
   
}

function mensajeDeError(input,mensaje){
   let elemento=document.querySelector(`.${input}`);
       elemento.lastElementChild.innerHTML=mensaje;
 }

 function mensajeDeEnvio(){
   form.reset();
}






