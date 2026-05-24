/**
 * Lógica de MBG STVDIO
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de tienda cargado correctamente.");

    // Puedes añadir aquí la lógica de los botones
    const items = document.querySelectorAll('.box-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log("Navegando a: " + item.querySelector('.box-text').innerText);
        });
    });
});