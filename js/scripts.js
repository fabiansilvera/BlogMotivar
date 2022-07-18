let IdCounter = 0;
const datos = {
    titulo: '',
    metodo: '',
    mensaje: '',
};
const titulo = document.querySelector('#titulo');
const metodo = document.querySelector('#metodo');
const mensaje = document.querySelector('#mensaje');
const input = document.querySelector('.input');
const errorMensaje = document.querySelector('#error');
const formulario = document.querySelector('.formulario');
const crearSeccion = document.querySelector('#crearSeccion');

//let seccion =

titulo.addEventListener('input', leertexto);
metodo.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

crearSeccion.addEventListener('click',e =>{
    botonCerrar(e)
})

formulario.addEventListener('submit',e => {
    e.preventDefault()
    let {titulo, metodo, mensaje } = datos;
    if(titulo === '' || metodo === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
        } else {
            generarSeccion()
        };
});
function leertexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    errorMensaje.appendChild (error);
    setTimeout(()=>{
        error.remove();
    }, 2000);
};

const generarSeccion = () => {
    IdCounter++;
    crearSeccion.innerHTML += `
    <div class="seccionPersonal" id="${IdCounter}">
    <h2 class="centrar-texto">"${datos.titulo}"</h2>
    <h3 class="seccion-conectar__metodo">"${datos.metodo}"</h3>
    <p class="seccion-conectar__parrafo">"${datos.mensaje}"</p>
     <div class="posicion-boton">
      <svg xmlns="http://www.w3.org/2000/svg" class="botonCerrar" id="${IdCounter}" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <line x1="4" y1="7" x2="20" y2="7" />
       <line x1="10" y1="11" x2="10" y2="17" />
       <line x1="14" y1="11" x2="14" y2="17" />
       <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
       <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </div>
    `
}

const botonCerrar = e=> {
    if (e.target.classList.contains("botonCerrar")) {
        document.getElementById([e.target.id]).remove();
}
}
