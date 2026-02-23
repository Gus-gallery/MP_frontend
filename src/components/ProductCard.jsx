import useCart from "../store/useCart";

export default function ProductCard({ product }) {
  const addItem = useCart(s => s.addItem);

  return (
    <div className="kort">
      <img src={product.image} alt={product.name} />
      <div className="kort-info">
        <h2>{product.name}</h2>
        <p>{product.price} kr</p>
        <button onClick={() => addItem(product)}>Læg i kurv</button>
      </div>
    </div>
  );
}