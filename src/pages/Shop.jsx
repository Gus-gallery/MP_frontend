import Header from '../components/Header'
import Products from '../components/Products'

const Shop = () => {
  return (
    <div className=''>
    <header className="top-0 sticky z-10">
        <Header />
    </header>
    <div className='mx-auto'>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-regular tracking-wide text-center mt-12 text-neutral-900">
          KATLA SHOP
        </h1>
        <p className="text-center font-basker-regular text-lg md:text-xl text-neutral-700 md:max-w-2xl mx-auto mb-12 px-4 ">
          Explore our curated selection of handcrafted products, each telling a unique story of craftsmanship and culture. From intricate textiles to beautifully designed ceramics, our collection celebrates the artistry and heritage of artisans from around the world. Discover the perfect piece that resonates with your style and values, while supporting sustainable and ethical practices.
        </p>
      </div>
      <Products />
    </div>
    </div>
  )
}

export default Shop