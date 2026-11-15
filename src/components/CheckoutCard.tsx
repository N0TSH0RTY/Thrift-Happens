import type { CartItem } from "../App";

interface CheckoutCardProps {
    item: CartItem;
    removeFromCart: (productId: number) => void;
}

function CheckoutCard({
    item,
    removeFromCart
}: CheckoutCardProps) {

    const subtotal = item.product.price * item.quantity;

    return (
        <div>
            <img
                src={`/${item.product.image}`}
                alt={item.product.name}
                width="100"
            />

            <h3>{item.product.name}</h3>

            <p>Size: {item.product.size}</p>
            <p>Price: ${item.product.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>

            <button
                onClick={() => removeFromCart(item.product.id)}
            >
                Remove Item
            </button>
        </div>
    );
}

export default CheckoutCard;
