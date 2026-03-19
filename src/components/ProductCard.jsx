import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col bg-primary border border-neutral-400">
      <img className="object-cover aspect-square w-full scale-100 transition-all ease-in-out duration-300" src={product.image} alt={product.name} />
      
      <div className="flex flex-col border-t border-neutral-200 flex-1 justify-between p-4 items-left transition-all ease-in-out duration-300">
        <div>
          <h2 className="font-basker-bold text-neutral-800 text-left text-lg">{product.name}</h2>
          <p className="font-light text-neutral-800 text-md mb-4">{product.price} DKK.</p>
          <p className="font-basker-regular text-neutral-800 text-md mb-4">{product.description}</p>
        </div>
        <button className="font-basker-regular text-lg bg-neutral-600 border border-zinc-200 hover:underline text-primary px-2 py-2 md:py-0 cursor-pointer transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}