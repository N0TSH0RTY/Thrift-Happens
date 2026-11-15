    import type { ClothingProduct } from "../data/data";
    import { useState } from "react";

    interface ItemCardProps {
        product: ClothingProduct;
        addToCart: (productId: number, quantity: number) => void;
    }


function ItemCard({ product, addToCart }: ItemCardProps) {
    const [quantity, setQuantity] = useState(0);

    function increaseQuantity() {
        setQuantity(previous => Math.min(previous + 1, product.quantity));
    }
    function decreaseQuantity() {
        setQuantity(previous => Math.max(previous - 1, 0));
    }
    function handleAddToCart() {
        if (quantity > 0 && quantity <= product.quantity) {
            addToCart(product.id, quantity);
            setQuantity(0);
        }
    }
    const selectedQuantity = Math.min(quantity, product.quantity);  

    return (
      <div>
        <img
            src={`/${product.image}`}
            alt={product.name}
            width="150"
        />


        <h3>{product.name}</h3>
        <p>Fit: {product.fit}</p>
        <p>Category: {product.category}</p>
        <p>Color: {product.color}</p>
        <p>Description: {product.description}</p>
        <p>Size: {product.size}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Stock: {product.quantity}</p>

        <button onClick={decreaseQuantity} disabled={selectedQuantity === 0}>-</button>

        <span> {selectedQuantity} </span>

        <button onClick={increaseQuantity} 
        disabled={selectedQuantity >= product.quantity}>+</button>

      <div>
      <button onClick={handleAddToCart} disabled={selectedQuantity === 0 
        || selectedQuantity > product.quantity}>
        Add to Cart
      </button>
    </div>

    </div>
    );
}
export default ItemCard;