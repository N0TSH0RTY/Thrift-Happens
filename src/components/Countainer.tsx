
import type { CartItem } from "../App";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps {
    cartItems: CartItem[];
    removeFromCart: (productId: number) => void;
    emptyCart: () => void;
}

function CheckoutContainer({
    cartItems,
    removeFromCart,
    emptyCart
}: CheckoutContainerProps) {

    const grandTotal = cartItems.reduce(
        (total, item) =>
            total + item.product.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Checkout</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CheckoutCard
                            key={item.product.id}
                            item={item}
                            removeFromCart={removeFromCart}
                        />
                    ))}

                    <h3>
                        Grand Total: ${grandTotal.toFixed(2)}
                    </h3>

                    <button onClick={emptyCart}>
                        Empty Cart
                    </button>
                </>
            )}
        </div>
    );
}

export default CheckoutContainer;
