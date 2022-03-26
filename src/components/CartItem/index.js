import "./style.css";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="cart-item-price">
        <h2>{item.name}</h2>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.price / 100)}
        </p>
      </div>
    </div>
  );
}
