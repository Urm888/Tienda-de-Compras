window.onload=init;
const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{6,15}$/, // 6 a 15 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}  
 const divInput=document.querySelectorAll(".input-contenedor");
 const form=document.getElementById("formulario");


 function init(){

   booton=document.getElementById("sesion");
   booton.addEventListener("click",ejecutarBoton); 
 }

 function ejecutarBoton(e){
    e.preventDefault(); 
    let validar = validacionLogin();
    if(validar){      
    mensajeDeSend();}
 }
 function validacionLogin(){
    let validar=true;
    divInput.forEach((element)=>{
    element.lastElementChild.innerHTML="";});
        
   correo=document.getElementById("email").value;
   if(!expresiones.email.test(correo)){
    mensajeDeWarning("correo","ERROR:El correo ingresado no se encuentra en nuestra base de datos");validar=false;}
    

   contraseña=document.getElementById("pass").value;
   if(contraseña == correo){
    mensajeDeWarning("contraseña","ERROR: La contraseña es incorrecta");
    validar=false;}
    
        
     return validar;       
     }

  function mensajeDeWarning(input,mensaje){
   let elemento=document.querySelector(`.${input}`);
       elemento.lastElementChild.innerHTML=mensaje;      
 }

  function mensajeDeSend(){
   form.reset();
}



