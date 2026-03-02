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
        <header section="header" className="sticky top-0 z-10 p-2 px-4 items-center flex mb-2 min-h-[60px]">
          <Link 
            to="/" 
            className="font-bold text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 px-2 text-center opacity-50 hover:opacity-100 transition-all lg:text-xl"
          >
            MARKET PROJECT
          </Link>
          <div className='ml-auto flex items-center text-md md:text-lg font-light text-neutral-600 gap-4 lg:gap-8'>
            
            
            <div className="flex items-center gap-8 lg:gap-12 text-md md:text-lg font-regular text-neutral-500">
              <Link to="/stories" className="hover:underline hover:text-neutral-300 transition-all">
                Artisans
              </Link>
              <Link to="/shop" className="hover:underline hover:text-neutral-300 transition-all">
                Shop
              </Link>
              
              <div className="text-lg font-regular">
                <button 
                  onClick={() => setKurvAaben(true)}
                  className="flex flex-row gap-2 items-center hover:text-neutral-300 transition-all cursor-pointer"
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