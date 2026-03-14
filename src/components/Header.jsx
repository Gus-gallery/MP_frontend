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
        <header section="header" className="sticky bg-primary top-0 z-20 px-6 items-center flex mb-2 min-h-20 shadow-sm">
          <Link 
            to="/" 
            className="font-bold tracking-wider hover:scale-105 text-2xl pt-2 text-sky-900 opacity-90 px-2 text-center transition-all ease-in-out duration-200 md:text-3xl"
          >
            KATLA
          </Link>
          <div className='ml-auto tracking-wide flex items-center font-basker-regular'>
            <div className="flex items-center gap-6 md:gap-8 text-xl md:text-xl text-neutral-500">
              <Link to="/stories" className="hover:text-neutral-800 transition-all duration-300 ease-in-out">
                artisans
              </Link>
              <Link to="/shop" className="hover:text-neutral-800 transition-all ease-in-out">
                shop
              </Link>
              
              <div className={`text-xl md:text-xl xl:text-2xl font-medium ${count === 0 ? '-ml-6' : ''}`}>
                {count > 0 && (
                <button 
                  onClick={() => setKurvAaben(true)}
                  className="flex flex-row gap-2 items-center hover:text-neutral-800 transition-all cursor-pointer"
                >
                  <ShoppingBag className='hover:scale-110 transition-all ease-in-out mt-1'/> {count}
                </button>
                )}
              </div>
            </div>
          </div>
        </header>
  
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
      </div>
    );
  };

export default Header