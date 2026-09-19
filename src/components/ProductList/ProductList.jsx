import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList({ products }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductList
