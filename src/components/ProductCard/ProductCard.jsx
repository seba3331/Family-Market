import { useState } from 'react'
import Button from '../Button/Button'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import './ProductCard.css'

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1)

  function handleMinus() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handlePlus() {
    setQuantity(quantity + 1)
  }

  function handleAddToCart() {
    alert('Próximamente habilitaremos esta sección')
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <p className="product-category">{product.category}</p>
      <h2>{product.name}</h2>
      <p className="product-price">${product.price.toLocaleString('es-CL')}</p>
      <QuantitySelector
        value={quantity}
        onMinus={handleMinus}
        onPlus={handlePlus}
      />
      <Button variant="primary" onClick={handleAddToCart}>
        Agregar {quantity} al carrito
      </Button>
    </article>
  )
}

export default ProductCard
