
import type { ClothingProduct } from "../data/data";
import ItemCard from "./ItemCards";

interface ItemContainerProps {
    products: ClothingProduct[];
    addToCart: (productId: number, quantity: number) => void;
}

function ItemContainer({ products, addToCart }: ItemContainerProps) {
    return (
        <div>
            <h2>Our Products</h2>
            <p>We Have {products.length} Products Available</p>

            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default ItemContainer;
