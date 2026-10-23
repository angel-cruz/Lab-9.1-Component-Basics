import { useState } from 'react';
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user: User = {
    id: '1',
    name: 'John Smith',
    email: 'john@email.com',
    role: 'Customer'
  };

  const product: Product = {
    id: '1',
    name: 'Tesla Model 3',
    price: 38990,
    description: 'Electric car with a modern design and great range.',
    imageUrl: '/images/tesla-model-3.svg',
    inStock: true
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="app">
      <h1>Tesla Car Shop</h1>
      <p>Cars in Cart: {cartItems.length}</p>

      {showAlert && (
        <AlertBox
          type="success"
          message="Tesla added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="container">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p>Free delivery available!</p>
        </ProductDisplay>
      </div>
    </div>
  );
}

export default App;
