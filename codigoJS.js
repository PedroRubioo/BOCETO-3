// script.js

document.addEventListener('DOMContentLoaded', () => {
    const categorias = ['programacion', 'educacion', 'gastronomia']; // Añadir más categorías aquí
    categorias.forEach(categoria => {
        const cuadriculaTrabajos = document.querySelector(`#categoria-${categoria}`);
        const carruselContainer = cuadriculaTrabajos.closest('.carrusel-container');

        // Ajustamos el comportamiento de la barra deslizante
        window.addEventListener('resize', () => {
            const anchoTotal = cuadriculaTrabajos.scrollWidth;
            carruselContainer.style.overflowX = anchoTotal > window.innerWidth ? 'scroll' : 'hidden';
        });
    });
});

