import Button from '../Button/Button'
import './Cart.css'

function Cart({ items, onRemove, onCheckout }) {
  if (items.length === 0) {
    return (
      <section className="cart">
        <h2>Tu carrito</h2>
        <p className="cart-empty">Todavía no agregaste productos.</p>
      </section>
    )
  }

  let total = 0
  for (const item of items) {
    total = total + item.price * item.quantity
  }

  return (
    <section className="cart">
      <h2>Tu carrito</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p>
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <button type="button" className="cart-remove" onClick={() => onRemove(item.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${total.toFixed(2)}</p>
      <Button variant="primary" onClick={onCheckout}>
        Compra aquí
      </Button>
    </section>
  )
}

export default Cart
