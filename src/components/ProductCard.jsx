import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2 p-2 max-w-1/4 bg-zinc-700 rounded-xl">
      <img className="object-contain rounded-md" src={product.image} alt={product.name} />
      <div className="flex flex-col">
        <h2 className="font-black text-left">{product.name}</h2>
        <div className="justify-between flex items-center">
            <p className="font-light text-md">{product.price} kr</p>
            <button className="font-regular text-md bg-zinc-800 px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-900 transition-all" onClick={() => addItem(product)}>Læg i kurv</button>
        </div>
      </div>
    </div>
  );
}