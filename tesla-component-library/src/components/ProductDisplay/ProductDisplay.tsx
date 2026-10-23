import type { ProductDisplayProps } from '../../types';
function ProductDisplay({ product, showDescription = true, showStockStatus = true, onAddToCart, children }: ProductDisplayProps) {
  return <div className="product-card"><h2>{product.name}</h2>{product.imageUrl && <img src={product.imageUrl} alt={product.name} width="300" />}<p>Price: ${product.price.toLocaleString()}</p>{showDescription && <p>{product.description}</p>}{showStockStatus && <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>}{children}{onAddToCart && <button disabled={!product.inStock} onClick={() => onAddToCart(product.id)}>Add to Cart</button>}</div>;
}
export default ProductDisplay;
