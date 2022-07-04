document.addEventListener('DOMContentLoaded', () => {
    iniciarApp()
})
function iniciarApp() {
    generarSeccion()
    usarDatos()
}
let datos = {
    titulo: '',
    metodo: '',
    mensaje: '',
}
const titulo = document.querySelector('#titulo');
const metodo = document.querySelector('#metodo');
const mensaje = document.querySelector('#mensaje');
const input = document.querySelector('.input');
const listaTarea = document.querySelector('#lista-tareas')
const formulario = document.querySelector('.formulario');
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment();

//let seccion =

titulo.addEventListener('input', leertexto);
metodo.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

formulario.addEventListener('submit',e => {
    e.preventDefault()
    let {titulo, metodo, mensaje } = datos;
    if(titulo === '' || metodo === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
        } else {
            generarSeccion(e)
            listaTarea.appendChild(cerrarSeccion)  
        };
});
function leertexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild (error);
    setTimeout(()=>{
        error.remove();
    }, 2000);
};

const generarSeccion = (e) => {
    const dato = {
        id: Date.now(),
        titulo: datos.titulo,
        metodo: datos.metodo,
        mensaje: datos.mensaje,
        estado: false
    }
    datos[datos.id] = dato
    formulario.reset()
    usarDatos()
}
const usarDatos = () => {
    listaTarea.innerHTML = ''
    Object.values(datos).forEach(dato => {
    const clone = template.cloneNode(true)
    clone.querySelector('h2').textContent = dato.titulo
    clone.querySelector('h3').textContent = dato.metodo
    clone.querySelector('p').textContent = dato.mensaje
    fragment.appendChild(clone)
    })
    listaTarea.appendChild(fragment) 


    
      
}
 const cerrarSeccion= document.createElement('p');
    cerrarSeccion.textContent = 'X';
    cerrarSeccion.classList.add('btn-cerrar');
    cerrarSeccion.classList.add('btn-cerrar__posicion');
    cerrarSeccion.onclick = function() {
        listaTarea.remove();
}