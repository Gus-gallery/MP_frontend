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
        <header section="header" className="sticky bg-linear-0 from-zinc-800 to-zinc-700 z-10 p-2 px-4 items-center flex justify-between border-b border-zinc-500 mb-2 shadow-xl">
        <Link to="/" className="font-regular hover:underline text-xl">Project Bezos</Link>

            <div className='flex text-lg font-light items-center gap-8'>
                <Link to="/stories" className="hover:underline">
                    Stories 
                </Link>
                {/* <Link to="/shop" className="hover:underline">
                    Shop
                </Link> */}

                <div className="text-lg font-medium" onClick={() => setKurvAaben(true)}>
                 <button className=" flex flex-row gap-2 items-center hover:bg-zinc-400/10 transition-all px-2 py-1 border border-zinc-500 cursor-pointer"><ShoppingBag/> {(count())}</button>
                </div>
            </div>
        </header> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header