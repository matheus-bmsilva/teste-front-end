export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  installments?: string;
}

// Função que tenta pegar da API, se falhar usa dados locais
export async function fetchProducts(): Promise<Product[]> {
  const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
  
  try {
    console.log('Tentando buscar produtos da API econverse...');
    
    // Usando try-catch com fallback
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Tentativa de resolver CORS
      mode: 'cors',
      credentials: 'omit'
    });
    
    console.log('Status da resposta:', response.status);
    
    if (!response.ok) {
      throw new Error(`API retornou status ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`✅ Sucesso! ${data.length} produtos carregados da API`);
    
    // Retorna os dados se a requisição foi bem-sucedida
    return data;
    
  } catch (error) {
    console.error('Erro ao buscar produtos da API:', error);
    console.log('Usando dados mock como fallback...');
    return getMockProducts();
  }
}

// Versão com CORS proxy
export async function fetchProductsWithProxy(): Promise<Product[]> {
  const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
  
  // Lista de proxies CORS (use o primeiro que funcionar)
  const proxies = [
    '', // Tentar direto primeiro
    'https://cors-anywhere.herokuapp.com/',
    'https://api.allorigins.win/raw?url=',
    'https://thingproxy.freeboard.io/fetch/'
  ];
  
  for (const proxy of proxies) {
    try {
      const url = proxy ? `${proxy}${encodeURIComponent(API_URL)}` : API_URL;
      console.log(`Tentando com proxy: ${proxy || 'direto'}`);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        signal: AbortSignal.timeout(10000) // Timeout de 10 segundos
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Sucesso com proxy: ${proxy || 'direto'}`);
        return data;
      }
    } catch (error) {
      console.log(`Proxy ${proxy || 'direto'} falhou:`, error.message);
      continue;
    }
  }
  
  // Se todos falharem, usa dados mock
  console.log('❌ Todas as tentativas falharam, usando dados mock');
  return getMockProducts();
}

// Função fallback com dados mock
function getMockProducts(): Product[] {
  return [
    {
      productName: "Smartphone Premium",
      descriptionShort: "Smartphone com tela AMOLED, 128GB, câmera tripla",
      photo: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
      price: 2499.99,
      installments: "10x de R$ 249,99"
    },
    {
      productName: "Notebook Profissional",
      descriptionShort: "Notebook com processador i7, 16GB RAM, SSD 512GB",
      photo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      price: 4299.99,
      installments: "12x de R$ 358,33"
    },
    {
      productName: "Fone Bluetooth",
      descriptionShort: "Fone com cancelamento de ruído ativo, 30h bateria",
      photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      price: 799.99,
      installments: "6x de R$ 133,33"
    },
    {
      productName: "Smart Watch",
      descriptionShort: "Monitor cardíaco, GPS, resistente à água",
      photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      price: 1199.99,
      installments: "8x de R$ 149,99"
    },
    {
      productName: "Câmera DSLR",
      descriptionShort: "Câmera profissional com lente 18-55mm, 4K",
      photo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
      price: 3599.99,
      installments: "12x de R$ 299,99"
    },
    {
      productName: "Monitor Gamer",
      descriptionShort: "Monitor curvo 34'', 144Hz, WQHD",
      photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
      price: 2199.99,
      installments: "10x de R$ 219,99"
    },
    {
      productName: "Teclado Mecânico",
      descriptionShort: "Teclado gaming com switches Cherry, RGB",
      photo: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      price: 599.99,
      installments: "5x de R$ 119,99"
    },
    {
      productName: "Console de Videogame",
      descriptionShort: "Console última geração, 1TB SSD, 4K",
      photo: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
      price: 3499.99,
      installments: "15x de R$ 233,33"
    }
  ];
}