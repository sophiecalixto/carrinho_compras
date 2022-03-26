import AbaixoDe10 from "./abaixo-10-reais.json";
import AcimaDe10 from "./acima-10-reais.json";
import CartItem from "./components/CartItem";
import "./style.css";

const totalPrice = (items) => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.price;
  });
  return sum;
};

export default function App() {
  const items = AbaixoDe10.items; // Alterar JSON aqui
  const total = totalPrice(items);

  return (
    <div className="container">
      <div className="title">
        <h1>Meu Carrinho</h1>
      </div>
      {items.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
      <div className="total-price">
        <div className="total">
          <h3>Total: </h3>
          <h3>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total / 100)}
          </h3>
        </div>
        <div className={total / 100 > 10 ? "discount" : "hidden"}>
          <h3>Parabéns, sua compra tem frete grátis !</h3>
        </div>
      </div>
      <div className="purchase-button">
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}
