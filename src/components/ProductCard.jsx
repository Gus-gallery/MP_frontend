import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="flex flex-col gap-2 p-1 max-w-1/2 md:max-w-1/3 lg:max-w-1/4">
      <img className=" object-cover aspect-square w-full scale-100 hover:scale-90 transition-all ease-in-out duration-300" src={product.image} alt={product.name} />
      <div className="flex flex-col bg-neutral-200 p-4 items-center transition-all ease-in-out duration-300">
        <h2 className="font-regular text-neutral-800 text-left text-sm">{product.name}</h2>
        <p className="font-light text-neutral-800 text-md mb-4">{product.price} DKK.</p>
        <button className="font-light text-lg bg-neutral-300 text-neutral-800 px-2 py-1 cursor-pointer hover:bg-neutral-400 transition-all" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </div>
  );
}