import React from 'react';
import { Product } from '../../data/products';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Fechar modal">
          ✕
        </button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>
          
          <div className="modal-info">
            <h2 className="modal-title">{product.productName}</h2>
            <div className="modal-price">
              <span className="price-main">R$ {product.price.toFixed(2)}</span>
              {product.installments && (
                <span className="price-installments">{product.installments}</span>
              )}
            </div>
            <p className="modal-description">{product.descriptionShort}</p>
            
            <div className="modal-actions">
              <button className="buy-button">Comprar</button>
              <button className="cart-button">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};