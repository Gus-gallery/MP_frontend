import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2 p-1 max-w-1/2 md:max-w-1/3 lg:max-w-1/4">
      <img className="border border-zinc-300 object-cover aspect-square w-full scale-100 hover:scale-90 transition-all ease-in-out" src={product.image} alt={product.name} />
      <div className="flex flex-col bg-zinc-800 p-4 border border-zinc-600 items-center">
        <h2 className="font-medium text-left">{product.name}</h2>
        <p className="font-light text-md mb-4">{product.price} DKK.</p>
        <button className="font-regular text-md bg-zinc-700 px-2 py-1 border border-zinc-500 cursor-pointer hover:bg-zinc-600 hover:scale-110 transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}