import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  )
}

export default ProductList
