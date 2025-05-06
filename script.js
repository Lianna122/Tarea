document.addEventListener('DOMContentLoaded', function() {
    const botonesCompra = document.querySelectorAll('.boton-compra');

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombreProducto = this.dataset.nombre;
            const precioProducto = this.dataset.precio;
            alert(`¡Has añadido ${nombreProducto} al carrito por $${precioProducto}! (Esta funcionalidad es solo un ejemplo)`);
            // Aquí podrías agregar la lógica real para añadir al carrito
        });
    });
});