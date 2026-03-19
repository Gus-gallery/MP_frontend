import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <div className="bg-neutral-800 flex flex-col items-center justify-center gap-4 p-2 text-primary">
         <Newsletter />
        

        <div className="flex flex-col mt-8 justify-around w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4">
                <Link to="/about" className="font-basker-regular text-lg hover:underline">
                    About
                </Link>
                <Link to="/contact" className="font-basker-regular text-lg hover:underline">
                    Contact
                </Link>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <p className="font-regular text-lg">
                    &copy; {new Date().getFullYear()} KATLA I/S. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer