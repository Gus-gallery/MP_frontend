import React from 'react'
import { useState } from "react";
import useCart from "../store/useCart";
import Cart from './Cart';

const Header = () => {
    const [kurvAaben, setKurvAaben] = useState(false);
  const count = useCart(s => s.count);

  return (
    <div>
        <div section="header" className="p-2 px-4 items-center flex justify-between bg-zinc-700 mb-2 shadow-xl">
        <h1 className="font-black text-2xl">Project MarketPlace</h1>

            <div className='flex items-center gap-4'>
                <button className="text-xl font-bold" onClick={() => setKurvAaben(true)}>
                Cart ({count()})
                </button>
            </div>
        </div> 
        {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  )
}

export default Header