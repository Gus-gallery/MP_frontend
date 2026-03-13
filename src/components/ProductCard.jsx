import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2">
      <img className="object-cover aspect-square w-full scale-100 transition-all ease-in-out duration-300" src={product.image} alt={product.name} />
      
      
      <div className="flex bg-white flex-col p-4 items-left transition-all ease-in-out duration-300">
        <h2 className="font-basker-bold text-neutral-800 text-left text-lg">{product.name}</h2>
        <p className="font-basker-medium text-neutral-800 text-md mb-4">{product.price} DKK.</p>
        <p className="font-basker-regular text-neutral-800 text-md mb-4">{product.desription}</p>
        <button className="font-basker-regular text-lg bg-zinc-600 border border-zinc-200 hover:underline text-primary px-2 cursor-pointer transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}