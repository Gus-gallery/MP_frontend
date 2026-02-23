import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2 p-2 max-w-1/2 md:max-w-1/3 lg:max-w-1/4 rounded-xl">
      <img className="border border-zinc-200 object-cover rounded-md aspect-square w-full" src={product.image} alt={product.name} />
      <div className="flex flex-col items-center">
        <h2 className="font-black text-left">{product.name}</h2>
        <p className="font-light text-md mb-4">{product.price} DKK.</p>
        <button className="font-regular text-md bg-zinc-900 px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-950 transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}