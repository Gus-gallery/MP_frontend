import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2 p-2 max-w-1/4 bg-zinc-700 rounded-xl">
      <img className="object-cover rounded-md aspect-square w-full" src={product.image} alt={product.name} />
      <div className="flex flex-col items-center">
        <h2 className="font-black text-left">{product.name}</h2>
        <p className="font-light text-md mb-4">{product.price} DKK.</p>
        <button className="font-regular text-md bg-zinc-800 px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-900 transition-all" onClick={() => addItem(product)}>Læg i kurv</button>
      </div>
    </div>
  );
}