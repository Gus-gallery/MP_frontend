import React from 'react'
import { useState } from "react";
import useCart from "../store/useCart";
import Cart from './Cart';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
    const [kurvAaben, setKurvAaben] = useState(false);
  const count = useCart(s => s.count);

  return (
    <div>
        <div section="header" className="p-2 px-4 items-center flex justify-between bg-zinc-700 mb-2 shadow-xl">
        <h1 className="font-black text-2xl">Project MarketPlace</h1>

            <div className='flex text-lg font-medium items-center gap-4'>
                <h2>
                    Artist Stories 
                </h2>
                <h2>
                    Concept
                </h2>

                <button className="text-lg font-medium" onClick={() => setKurvAaben(true)}>
                {count() == 0 ? <div className='bg-zinc-800 p-1 items-center hover:bg-zinc-900 transition-all rounded-md cursor-pointer'><ShoppingBag/></div> : <button className="bg-zinc-800 flex flex-row gap-2 items-center hover:bg-zinc-900 transition-all px-2 py-1 rounded-md cursor-pointer"><ShoppingBag/> {(count())}</button>} 
                </button>
            </div>
        </div> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header