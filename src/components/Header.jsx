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
        <header section="header" className="sticky bg-neutral-900 z-10 p-2 px-2 items-center flex justify-between mb-2 shadow-xl">
        <Link to="/" className="font-light texl-lg text-orange-500 px-2 border opacity-50 hover:opacity-100 transition-all lg:text-xl">Market Project</Link>

            <div className='flex text-md md:text-lg font-light text-neutral-500 items-center gap-4 lg:gap-8'>
                <Link to="/stories" className="hover:underline hover:text-neutral-300 transition-all">
                    Stories 
                </Link>
                <Link to="/shop" className="hover:underline hover:text-neutral-300 transition-all">
                    Shop
                </Link>

                <div className="text-lg font-medium" onClick={() => setKurvAaben(true)}>
                 <button className=" flex flex-row gap-2 items-center hover:bg-zinc-400/10 hover:text-neutral-300 transition-all px-2 py-1 rounded-sm cursor-pointer"><ShoppingBag/> {count}</button>
                </div>
            </div>
        </header> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header