import useCart from "../store/useCart";
import X from "lucide-react/dist/esm/icons/x.js";

export default function Cart({ onClose }) {
  const { items, removeItem, total } = useCart();

  async function gåTilCheckout() {
    if (items.length === 0) return;
  
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/opret-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(i => ({
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          }))
        }),
      });
  
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Ingen checkout URL:", data);
      }
    } catch (err) {
      console.error("Checkout fejl:", err);
    }
  }

  return (
    <div className={`text-left bg-primary border-l rounded-l border-b border-neutral-300 fixed top-0 right-0 p-4 flex flex-col gap-4 animate-fade-in transition-all min-w-70 min-h-45 max-h-screen`}>
      <div className="text-right text-lg mt-18">
        <button className="hover:bg-zinc-600 text-neutral-900 cursor-pointer transition-all bg-zinc-400 rounded-full " onClick={onClose}><X/></button>
      </div>

      <div className="font-basker-regular text-md text-neutral-900 p-2 flex-1 overflow-y-auto min-h-0">
        {items.length === 0
          ? <p className="font-basker-regular">Cart is empty</p>
          : items.map(item => (
            <div key={item.id} className="flex flex-col items-center gap-4 aspect-square h-60 text-left">
              <img className="border-zinc-300 rounded border object-cover aspect-square w-40" src={item.image} alt={item.name} />
              <div className="font-basker-regular text-sm flex flex-col items-start gap-1">
                <strong>{item.name}</strong>
                <div className="flex flex-row gap-2 font-light items-center">
                <p className="text-neutral-900">{item.quantity} * {item.price} DKK.</p>
                <button className="bg-zinc-300 rounded-full cursor-pointer hover:scale-105 hover:bg-red-600 transition-all ml-4 w-fit -mt-4" onClick={() => removeItem(item.id)}><X/></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="items-left flex flex-col text-md md:text-lg font-basker-medium gap-2">
        {items.length === 0 ? null : (
        <>
          <p className="text-neutral-900">Total: {total().toFixed(2)} DKK.</p>
          <button className="bg-zinc-600 hover:bg-zinc-700 border border-neutral-700 rounded transition-all px-2 cursor-pointer" onClick={gåTilCheckout} disabled={items.length === 0}>
            Go to payment
          </button>
        </>
        )}
      </div>
    </div>
  );
}