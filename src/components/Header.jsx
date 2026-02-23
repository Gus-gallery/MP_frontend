import React from 'react'
import { useState } from "react";
import useCart from "../store/useCart";
import Cart from './Cart';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [kurvAaben, setKurvAaben] = useState(false);
  const count = useCart(s => s.count);

  return (
    <div>
        <header section="header" className="sticky bg-zinc-800 z-10 p-2 px-4 items-center flex justify-between border-b border-zinc-500 mb-2 shadow-xl">
        <Link to="/" className="font-medium hover:underline text-xl">Project Market</Link>

            <div className='flex text-lg font-light items-center gap-4'>
                <Link to="/stories" className="hover:underline">
                    Stories 
                </Link>
                <Link to="/shop" className="hover:underline">
                    Shop
                </Link>

                <div className="text-lg font-medium" onClick={() => setKurvAaben(true)}>
                 <button className="bg-zinc-700 flex flex-row gap-2 items-center hover:bg-zinc-600 transition-all px-2 py-1 rounded-md cursor-pointer"><ShoppingBag/> {(count())}</button>
                </div>
            </div>
        </header> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header