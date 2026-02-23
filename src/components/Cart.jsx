import useCart from "../store/useCart";

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
    <div className={`text-left bg-zinc-700 border-l border-b border-zinc-400 fixed top-0 right-0 p-4 flex flex-col gap-4 animate-fade-in transition-all min-w-70 min-h-45 max-h-screen`}>
      <div className="text-right text-lg mt-14">
        <button className="hover:bg-zinc-400 cursor-pointer transition-all bg-zinc-500 rounded-full px-2" onClick={onClose}>✕</button>
      </div>

      <div className="font-regular text-md p-2 rounded-md flex-1 overflow-y-auto min-h-0">
        {items.length === 0
          ? <p className="font-refular -mb-5">Cart is empty</p>
          : items.map(item => (
            <div key={item.id} className="flex flex-col items-center gap-4 aspect-square h-60 text-left">
              <img className="rounded-md border-zinc-300 border object-cover aspect-square w-40" src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <div className="flex flex-row gap-2 items-center">
                <p>{item.quantity} * {item.price} DKK.</p>
                <button className="bg-zinc-800 rounded-full cursor-pointer hover:scale-105 hover:bg-red-700 transition-all px-1.5 w-fit -mt-4" onClick={() => removeItem(item.id)}>✕</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="items-left flex flex-col gap-4">
        {items.length === 0 ? null : (
        <>
          <p className="">Total: {total().toFixed(2)} DKK.</p>
          <button className="bg-zinc-800 hover:bg-zinc-900 transition-all px-2 cursor-pointer rounded-md py-1" onClick={gåTilCheckout} disabled={items.length === 0}>
            Go to payment
          </button>
        </>
        )}
      </div>
    </div>
  );
}