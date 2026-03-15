import { Link } from 'react-router-dom';

const UnderHero = () => {
  return (
    <div className="-mt-20 mb-2">
      <div className="relative grid grid-cols-1 md:grid-cols-2 font-basker-medium gap-2 w-full justify-center">  
        
        <div
          className="relative h-140 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/artisans.png')" }}
        >
          <Link to="/artisans" className="absolute inset-0 z-10" />
          <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute p-8 text-primary text-xl md:text-2xl lg:text-3xl">
            Read about the artisans
          </h2>
        </div>

        <div
          className="relative h-140 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/shop.png')" }}
        >
          <Link to="/shop" className="absolute inset-0 z-10" />
          <div className="absolute inset-0 bg-black/30" />
          <h2 to="/shop" className="absolute p-8 text-primary text-xl md:text-2xl lg:text-3xl">
            Explore the shop
          </h2>
        </div>

      </div>
    </div>
  )
}

export default UnderHero