import { products as initialProducts} from './data/data';
import ItemContainer from './components/ItemsComponents';
import type { ClothingProduct } from './data/data';

import { useState } from 'react';
import Navbar from './components/Navbar';
import CheckoutContainer from './components/Countainer';


export interface CartItem {
  product: ClothingProduct;
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<ClothingProduct[]>(() => initialProducts.map(product => ({ ...product}))
);
  

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [page, setPage] = useState<'shop' | 'checkout'>('shop');

  function addToCart(productId: number, quantity: number) { 
    const product = products.find((p) => p.id === productId);
   
    if (!product || quantity <= 0 || quantity > product.quantity) {
      return;
    }

    setProducts((previous) =>
      previous.map((p => p.id === productId ? { ...p, quantity: p.quantity - quantity } : p))
    );


    setCartItems((previous) => {
      const existingCartItem = previous.find((item) => item.product.id === productId);
      
      if (existingCartItem) {
        return previous.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...previous, { product, quantity }];
    });
  }
  
  function removeFromCart(productId: number) {
    const cartItem = cartItems.find(item => item.product.id === productId);
    
    if (!cartItem) {
      return;
    } 

    setProducts(previous => previous.map(p => p.id === productId ?
       { ...p, quantity: p.quantity + cartItem.quantity } : p
      )
    
    );
    setCartItems(previous => previous.filter(item => item.product.id !== productId));
  }

  function emptyCart() {
    setProducts(previous => previous.map(product => {
      const cartItem = cartItems.find(item => item.product.id === product.id);
      return cartItem ? { ...product, quantity: product.quantity + cartItem.quantity } : product;
    }));
    setCartItems([]);
  }
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h1>Thrift Happens</h1>
      <h2>Welcome to Thrift Happens! Your one-stop shop for affordable and stylish clothing.</h2>
      <Navbar page={page} setPage={setPage} cartItemCount={cartItemCount} />
      {page === 'shop' ? (
        <ItemContainer products={products} addToCart={addToCart} />
      ) : (
        <CheckoutContainer cartItems={cartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} />
      )}
    </div>
  );
}

export default App;
  