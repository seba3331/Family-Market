# Café Aroma

Tienda de café hecha con React. Muestra granos, mugs y accesorios usando piezas reutilizables, datos de ejemplo y un buscador.

## Descripción

Proyecto de la Tarea 1 (componentes de e-commerce). La pantalla se arma como un Lego: cada pieza tiene un trabajo, y `App.jsx` las junta.

Los productos viven en `src/data/products.js`. No hay servidor: es un array local con `id`, `name`, `price`, `category` e `image`.

La búsqueda se guarda con `useState` en `App`. Si escribes "mug" o "granos", la lista se filtra por nombre o categoría.

## Componentes

Cada componente está en su propio archivo dentro de `src/components/`.

- **Header**: logo y nombre de la tienda.
- **SearchBar**: caja de búsqueda. Recibe `value` y `onChange` por props (datos que le pasa el padre).
- **ProductList**: recorre el array con `.map()` y usa `key={product.id}`.
- **ProductCard**: recibe el producto por **props** y muestra imagen, categoría, nombre, precio, cantidad y botón.
- **QuantitySelector**: botones + y − para elegir cuántas unidades comprar.
- **Button**: botón reutilizable. Cambia de aspecto según `variant` (`primary` o `secondary`).
- **Footer**: datos de la tienda (nombre y ciudad).

## Cómo ejecutar

En la carpeta del proyecto:

```bash
npm install
npm run dev
```

`npm install` descarga las herramientas que el proyecto necesita (como ir a comprar los ingredientes).

`npm run dev` enciende el servidor local. Abre en el navegador la URL que muestre Vite, por ejemplo `http://localhost:5173`.

## Tecnologías

- React
- Vite
- JavaScript
- CSS

## Capturas

### Vista general

La tienda completa: encabezado, buscador, grilla de productos y pie de página.

![Vista general de Café Aroma](docs/vista-general.png)

### Búsqueda

Al escribir `mug` en el buscador, solo quedan los productos de esa categoría.

![Búsqueda filtrada por mug](docs/busqueda.png)
