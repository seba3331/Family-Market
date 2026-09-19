import Cart from '../Cart/Cart'
import './Header.css'

function Header({ cartCount, cartOpen, cartItems, onToggleCart, onRemove, onCheckout }) {
  let cartBox
  if (cartOpen) {
    cartBox = (
      <Cart items={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
    )
  }

  return (
    <header className="header">
      <div className="header-brand">
        <p className="header-logo">🛒</p>
        <div>
          <h1>Family Market</h1>
          <p className="header-tagline">El mercado de la familia</p>
        </div>
      </div>
      <div className="header-cart-wrap">
        <button
          type="button"
          className="header-cart"
          onClick={onToggleCart}
          aria-label={'Carrito (' + cartCount + ')'}
        >
          <svg
            className="header-cart-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <circle cx="9" cy="20" r="1.6" fill="currentColor" />
            <circle cx="18" cy="20" r="1.6" fill="currentColor" />
            <path
              d="M4 5h2l2.2 10h10.3l1.8-7H7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{cartCount}</span>
        </button>
        {cartBox}
      </div>
    </header>
  )
}

export default Header
