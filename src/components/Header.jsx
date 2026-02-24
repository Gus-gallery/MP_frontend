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
        <header section="header" className="sticky bg-zinc-800 z-10 p-2 px-2 md:px-4 lg:px-20 items-center flex justify-between border-b border-zinc-700 mb-2 shadow-xl">
        <Link to="/" className="font-regular hover:underline texl-lg md:text-2xl bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent bg-clip-text">Market Project</Link>

            <div className='flex text-md md:text-lg font-light items-center gap-4 lg:gap-8'>
                <Link to="/stories" className="hover:underline">
                    Stories 
                </Link>
                <Link to="/shop" className="hover:underline">
                    Shop
                </Link>

                <div className="text-lg font-medium" onClick={() => setKurvAaben(true)}>
                 <button className=" flex flex-row gap-2 items-center hover:bg-zinc-400/10 transition-all px-2 py-1 border border-zinc-500 cursor-pointer"><ShoppingBag/> {count}</button>
                </div>
            </div>
        </header> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header