import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import ProductList from './components/ProductList/ProductList'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Footer from './components/Footer/Footer'

function quitarAcentos(texto) {
  return texto
    .toLowerCase()
    .replaceAll('á', 'a')
    .replaceAll('é', 'e')
    .replaceAll('í', 'i')
    .replaceAll('ó', 'o')
    .replaceAll('ú', 'u')
    .replaceAll('ü', 'u')
}

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(function () {
    async function loadProducts() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('https://dummyjson.com/products')

        if (response.ok === false) {
          setError('No se pudieron cargar los productos.')
          setLoading(false)
          return
        }

        const data = await response.json()
        const list = data.products.map(function (item) {
          return {
            id: item.id,
            name: item.title,
            price: item.price,
            category: item.category,
            image: item.thumbnail,
          }
        })

        setProducts(list)
        setLoading(false)
      } catch (problem) {
        setError('No se pudieron cargar los productos. Revisa tu conexión e intenta de nuevo.')
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const text = quitarAcentos(search)
  const filteredProducts = products.filter((product) => {
    const name = quitarAcentos(product.name)
    return name.includes(text)
  })

  let cartCount = 0
  for (const item of cart) {
    cartCount = cartCount + item.quantity
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleToggleCart() {
    setCartOpen(!cartOpen)
  }

  function handleCheckout() {
    alert('Gracias por tu compra. Pronto habilitaremos el pago.')
    setCart([])
    setCartOpen(false)
  }

  function handleAddToCart(product, quantity) {
    const existing = cart.find((item) => item.id === product.id)

    if (existing) {
      const nextCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity + quantity,
          }
        }
        return item
      })
      setCart(nextCart)
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      }
      setCart(cart.concat(newItem))
    }
  }

  function handleRemoveFromCart(id) {
    const nextCart = cart.filter((item) => item.id !== id)
    setCart(nextCart)
  }

  let productArea
  if (filteredProducts.length === 0) {
    productArea = (
      <p className="empty-message">
        No hay productos que coincidan con tu búsqueda.
      </p>
    )
  } else {
    productArea = (
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    )
  }

  let mainContent
  if (loading) {
    mainContent = <Loader />
  } else if (error !== '') {
    mainContent = <ErrorMessage text={error} />
  } else {
    mainContent = (
      <div>
        <SearchBar value={search} onChange={handleSearchChange} />
        {productArea}
      </div>
    )
  }

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        cartOpen={cartOpen}
        cartItems={cart}
        onToggleCart={handleToggleCart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <main className="main">
        <p className="main-subtitle">Encuentra lo que tu familia necesita</p>
        {mainContent}
      </main>
      <Footer />
    </div>
  )
}

export default App
