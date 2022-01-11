window.onload=iniciar;
const login=document.getElementById("sesion");
const correo=docuemnt.getElementById("correo");
const contraseña=document.getElementById("contraseña");
const error=docuemnt.querySelectorAll("input-contenedor");

const regulaciones={
    password: /^.{6,15}$/, // 6 a 15 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,}

function iniciar(){
    login.addEventListener("click",botonIniciar);
}

function botonIniciar(e){
    e.preventDefault();
    validar= validarLogin();
}

function validarLogin(){
let validar=true;

if(!regulaciones.email.test(correo)){
    warning("correo","El correo electronico ingresado no coincide con alguna cuenta");
    validar=false;   
}
if(!regulaciones.password.test(contraseña)){
    warning("contraseña","La contraseña es Incorrecta")
    validar=false;
}
}



function warning(valido,){
    let war=document.querySelector(`.${valido}`)
        war=document.lastElementChild.InnerHTML="mensaje"
}


