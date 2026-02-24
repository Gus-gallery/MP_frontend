import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="items-center flex flex-col mx-auto py-20">
        
          <h1 className="font-light cursor-default text-4xl lg:text-6xl text-center mt-2 mb-2 md:blur-xl hover:blur-none transition-all duration-300 ease-in-out">
              Market Project
          </h1>
          <div className="flex flex-row gap-20 mt-40">
            <h3 className='font-bold text-3xl lg:text-5xl'>
              <Link to="/stories" className="px-4 py-2 md:blur-lg hover:blur-none transition-all duration-300 ease-in">
                Stories
              </Link>
            </h3>
            <h3 className="font-bold text-3xl lg:text-5xl">
              <Link to="/shop" className="px-4 py-2 md:blur-lg hover:blur-none transition-all duration-300 ease-in">
                Shop
              </Link>
          </h3>
          </div>  
    </div>
  )
}

export default Hero