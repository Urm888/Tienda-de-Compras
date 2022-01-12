window.onload=init;
const regulaciones={
    password: /^.{6,15}$/, // 6 a 15 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
const form=document.getElementById("formulario");
const error=docuemnt.querySelectorAll(".input-contenedor");

function init(){
login=document.getElementById("sesion").value;
login.addEventListener("click",botonIniciar);
}

function botonIniciar(e){
    e.preventDefault();
    validar=validarLogin
    if(validar){      
    mensajeDeEnvio();} 
}

function validarLogin(){
    let validar=true;

correo=document.getElementById("correo").value;
if(!regulaciones.email.test(correo)){
    warning("correo","El correo electronico ingresado no coincide con alguna cuenta");
    validar=false;}

contraseña=document.getElementById("contraseña").value;
if(!regulaciones.password.test(contraseña)){
    warning("contraseña","La contraseña es Incorrecta");
    validar=false;}
    return validar;
}


function warning(iniciar,mensaje){
    let war=document.querySelector(`.${iniciar}`);
        war.lastElementChild.innerHTML=mensaje;
}
function mensajeDeEnvio(){
    form.reset();
}


