import useCart from "../store/useCart";

export default function Cart({ onClose }) {
  const { items, removeItem, total } = useCart();

  async function gåTilCheckout() {
    const res = await fetch("http://localhost:4000/opret-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="text-left bg-zinc-600 rounded-b-xl absolute top-0 right-0 p-4 flex flex-col gap-4">
      <div className="text-right text-lg">
        <button className="hover:bg-zinc-400 cursor-pointer hover:text-2xl transition-all bg-zinc-500 rounded-full px-2" onClick={onClose}>✕</button>
      </div>

      <div className="font-light text-md">
        {items.length === 0
          ? <p className="font-bold">Empty Cart</p>
          : items.map(item => (
            <div key={item.id} className="kurv-item">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.quantity} * {item.price} kr</p>
              </div>
              <button onClick={() => removeItem(item.id)}>✕</button>
            </div>
          ))
        }
      </div>

      <div className="">
        <p className="mb-2">Total: {total().toFixed(2)} kr</p>
        <button className="bg-zinc-700 hover:bg-zinc-800 transition-all px-2 cursor-pointer rounded-md py-1" onClick={gåTilCheckout} disabled={items.length === 0}>
          Go to payment
        </button>
      </div>
    </div>
  );
}