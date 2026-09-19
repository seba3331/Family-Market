import './Button.css'

function Button({ variant, children, onClick }) {
  let className = 'btn btn-primary'

  if (variant === 'secondary') {
    className = 'btn btn-secondary'
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
