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
    <div className="kurv-sidebar">
      <div className="kurv-header">
        <h2>Din kurv</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="kurv-items">
        {items.length === 0
          ? <p className="tom">Kurven er tom</p>
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

      <div className="kurv-footer">
        <p>Total: {total().toFixed(2)} kr</p>
        <button onClick={gåTilCheckout} disabled={items.length === 0}>
          Gå til betaling
        </button>
      </div>
    </div>
  );
}