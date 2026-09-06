import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import { products } from './data/products'

function App() {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase()
    const name = product.name.toLowerCase()
    const category = product.category.toLowerCase()
    return name.includes(text) || category.includes(text)
  })

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <p className="main-subtitle">Tienda de granos, mugs y accesorios</p>
        <SearchBar value={search} onChange={handleSearchChange} />
        {filteredProducts.length === 0 ? (
          <p className="empty-message">
            No hay productos que coincidan con tu búsqueda.
          </p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
