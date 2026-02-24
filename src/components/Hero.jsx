import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="items-center flex flex-col mx-auto py-20">
        
        
        <h1 className="font-bold text-5xl lg:text-7xl text-center mt-2 mb-2">
            Market Project
        </h1>
        <h2 className='font-light px-1 text-md lg:text-xl text-center mb-2'>
            A curated marketplace for items made with passion.
        </h2>

        <div className="flex flex-row gap-20 mt-20">
          <h3 className="font-bold text-3xl lg:text-5xl">
            <Link to="/shop" className="px-4 py-2">
              Shop
            </Link>
         </h3>
          <h3 className='font-bold text-3xl lg:text-5xl'>
            <Link to="/stories" className="px-4 py-2">
              Stories
            </Link>
          </h3>
        </div>
      
    </div>
  )
}

export default Hero