// JavaScript básico para mostrar/ocultar el menú al hacer clic en el botón hamburguesa
document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('nav.navbar ul');
    menu.classList.toggle('show'); // Cambia la clase para mostrar/ocultar el menú
});
