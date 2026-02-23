import Header from '../components/Header'
import Products from '../components/Products'

const Shop = () => {
  return (
    <div>
    <header className="top-0 sticky z-10">
        <Header />
    </header>
    
    <Products />
    </div>
  )
}

export default Shop