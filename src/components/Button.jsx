function Button({ variant, children }) {
  const className =
    variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button
