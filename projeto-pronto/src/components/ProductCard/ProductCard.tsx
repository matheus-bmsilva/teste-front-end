import React from 'react';
import { Product } from '../../data/products';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.productName}</h3>
        <div className="product-price">
          <span className="original-price">R$ {product.price.toFixed(2)}</span>
          {product.installments && (
            <span className="installments">{product.installments}</span>
          )}
        </div>
        <button className="details-button" onClick={(e) => { e.stopPropagation(); onClick(); }}>
          Ver detalhes
        </button>
      </div>
    </div>
  );
};