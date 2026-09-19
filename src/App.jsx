import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import Footer from './components/Footer/Footer'
import { products } from './data/products'

function App() {
  const [search, setSearch] = useState('')

  const text = search.toLowerCase()
  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase()
    const category = product.category.toLowerCase()
    return name.includes(text) || category.includes(text)
  })

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  let productArea
  if (filteredProducts.length === 0) {
    productArea = (
      <p className="empty-message">
        No hay productos que coincidan con tu búsqueda.
      </p>
    )
  } else {
    productArea = <ProductList products={filteredProducts} />
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <p className="main-subtitle">Tienda de granos, mugs y accesorios</p>
        <SearchBar value={search} onChange={handleSearchChange} />
        {productArea}
      </main>
      <Footer />
    </div>
  )
}

export default App
