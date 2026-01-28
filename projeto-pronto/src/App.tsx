import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductModal } from './components/ProductModal/ProductModal';
import { fetchProducts, Product } from './services/api';
import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        setError('Não foi possível conectar à API. Mostrando produtos de demonstração.');
      } finally {
        setLoading(false);
      }
    }
    
    loadProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">Vitrine de Produtos</h1>
            <p className="hero-subtitle">
              Confira nossos produtos em destaque. Clique em qualquer produto para ver mais detalhes.
            </p>
          </div>
        </section>
        
        <section className="products-section">
          <div className="container">
            {loading && (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Carregando produtos da API econverse...</p>
              </div>
            )}
            
            {error && (
              <div className="error-message">
                <p>⚠️ {error}</p>
              </div>
            )}
            
            {!loading && !error && (
              <div className="products-grid">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;