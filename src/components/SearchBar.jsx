function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Buscar por nombre o categoría"
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchBar
