/* esto es para darle colo al menu inocio y contacto*/

const botonMenu = document.querySelector('.menuprincipal');
const nav = document.querySelector('.nav');

botonMenu.addEventListener('click', () => {
  nav.classList.toggle('mostrar-menu');
});

/* esto es para cambiar la imagen de perfil*/


const checkbox = document.querySelector('.theme-checkbox');
const fotoPerfil = document.querySelector('.fotodeperfil');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    fotoPerfil.src = 'img/fotoperfil-2.jpeg'; // Reemplaza 'img/nuevaImagen.jpeg' con la ruta de tu imagen
  } else {
    fotoPerfil.src = 'img/fotoperfil.jpeg'; // Reemplaza 'img/fotoperfil.jpeg' con la ruta de tu imagen original
  }

});

/*para darle el tema oscuro*/

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const h1 = document.querySelector('h1');
const parrafo = document.querySelector('p');
const headeroscuro = document.querySelector ('header')
const footero = document.querySelector ('footer')



themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.remove('light');
    body.classList.add('dark');
    h1.classList.remove('light');
    h1.classList.add('dark');
    parrafo.classList.remove('light');
    parrafo.classList.add('dark');
    headeroscuro.classList.remove('header');
    headeroscuro.classList.add('light');
    footero.classList.remove('footer');
    footero.classList.add('dark');


  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    h1.classList.remove('dark');
    h1.classList.add('light');
    parrafo.classList.remove('dark');
    parrafo.classList.add('light');
    headeroscuro.classList.add('header');
    headeroscuro.classList.remove('light');
    footero.classList.add('footer');
    footero.classList.remove('dark');


  }
});
