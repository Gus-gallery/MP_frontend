import { Link } from 'react-router-dom';
import TextParticles from './HeroText';

const Hero = () => {
  return (
    <div className="items-center flex flex-col mx-auto py-20">
      <div className=''>
        <video className="absolute top-0 left-0 w-full h-full opacity-100 object-cover" autoPlay playsInline loop muted>
          <source src="/bg_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

          {/* <div>
            <TextParticles />
          </div> */}
          
    </div>
  )
}

export default Hero