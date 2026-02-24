import { Link } from 'react-router-dom';
import TextParticles from './HeroText';

const Hero = () => {
  return (
    <div className="items-center flex flex-col mx-auto py-20">
        
          <div>
            <TextParticles />
          </div>
          
          {/* <h1 className="font-light cursor-default text-4xl lg:text-6xl text-center mt-2 mb-2 md:blur-xl hover:blur-none transition-all duration-300 ease-in-out">
              Market Project
          </h1> */}
    </div>
  )
}

export default Hero