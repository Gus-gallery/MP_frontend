import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2">
      <img className="border border-zinc-300 object-cover aspect-square w-full scale-100 transition-all ease-in-out duration-300" src={product.image} alt={product.name} />
      <div className="border border-zinc-300 flex bg-primary flex-col p-4 items-center transition-all ease-in-out duration-300">
        <h2 className="font-basker-medium text-neutral-800 text-left text-md">{product.name}</h2>
        <p className="font-basker-regular text-neutral-800 text-md mb-4">{product.price} DKK.</p>
        <button className="font-basker-bold text-lg hover:underline text-neutral-900 px-2 cursor-pointer transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}