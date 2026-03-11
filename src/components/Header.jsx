import React from 'react'
import { useState } from "react";
import useCart from "../store/useCart";
import Cart from './Cart';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [kurvAaben, setKurvAaben] = useState(false);
    const count = useCart(s => s.items.reduce((sum, i) => sum + i.quantity, 0));
  
    return (
      <div>
        <header section="header" className="sticky bg-primary top-0 z-10 pt-1 px-4 items-center flex mb-2 min-h-15">
          <Link 
            to="/" 
            className="font-regular text-md md:pt-1 text-neutral-900 opacity-90 px-2 text-center transition-all md:text-xl"
          >
            MARKET
          </Link>
          <div className='ml-auto flex items-center text-md md:text-lg font-light'>
            <div className="flex items-center gap-6 md:gap-8 text-sm md:text-lg font-light text-neutral-600">
              <Link to="/stories" className="hover:underline hover:text-neutral-800 transition-all">
                Artisans
              </Link>
              <Link to="/shop" className="hover:underline hover:text-neutral-800 transition-all">
                Shop
              </Link>
              
              <div className="text-lg font-regular">
                <button 
                  onClick={() => setKurvAaben(true)}
                  className="flex flex-row gap-2 items-center hover:text-neutral-800 transition-all cursor-pointer"
                >
                  <ShoppingBag className='mb-1'/> {count}
                </button>
              </div>
            </div>
          </div>
        </header>
  
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
      </div>
    );
  };

export default Header