function QuantitySelector({ value, onMinus, onPlus }) {
  return (
    <div className="quantity-selector">
      <button type="button" className="quantity-btn" onClick={onMinus}>
        −
      </button>
      <span className="quantity-value">{value}</span>
      <button type="button" className="quantity-btn" onClick={onPlus}>
        +
      </button>
    </div>
  )
}

export default QuantitySelector
