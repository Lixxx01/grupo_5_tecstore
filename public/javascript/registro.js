const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/, // 7 a 14 numeros.
    dni: /^\d{6,14}$/,
    password: /^.{8,12}$/ // 4 a 12 digitos.
}

const campos = {
	nombre: false,
	email: false,
	tel: false,
	dni: false,
	password: false
}


const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "tel":
            validarCampo(expresiones.tel, e.target, 'tel');
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "retype":
            validarPassword2();
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('retype');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo_password2`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_password2`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_password2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	
	const terminos = document.getElementById('terminos');
	if(!campos.nombre || !campos.email || !campos.tel || !campos.dni || !campos.password || !terminos.checked ){
		e.preventDefault();

		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');

		};
});








