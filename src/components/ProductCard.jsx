import Button from './Button'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Button variant="primary">Agregar al carrito</Button>
    </article>
  )
}

export default ProductCard
