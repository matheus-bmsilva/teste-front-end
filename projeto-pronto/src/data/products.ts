export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  installments?: string;
}

export const products: Product[] = [
  {
    productName: "Smartphone XYZ Pro",
    descriptionShort: "Smartphone com tela AMOLED de 6.7 polegadas, 256GB de armazenamento, câmera tripla de 108MP, processador Snapdragon 8 Gen 2, 12GB RAM, bateria de 5000mAh com carregamento rápido de 65W.",
    photo: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
    price: 3499.99,
    installments: "10x de R$ 349,99"
  },
  {
    productName: "Notebook Ultra Slim",
    descriptionShort: "Notebook com processador Intel i7 de 11ª geração, 16GB RAM DDR4, SSD NVMe de 1TB, tela IPS Full HD de 15.6 polegadas, placa de vídeo dedicada NVIDIA RTX 3050, teclado retroiluminado, Windows 11 Pro.",
    photo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    price: 5899.99,
    installments: "12x de R$ 491,66"
  },
  {
    productName: "Fone Bluetooth Premium",
    descriptionShort: "Fone de ouvido sem fio com cancelamento ativo de ruído, bateria com 30 horas de duração, conexão Bluetooth 5.2, microfone integrado para chamadas, case de carregamento com wireless charging, resistente à água IPX4.",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    price: 899.99,
    installments: "6x de R$ 149,99"
  },
  {
    productName: "Smart Watch Fitness",
    descriptionShort: "Smartwatch com monitoramento cardíaco 24/7, oxímetro de pulso, monitor de sono, GPS integrado, resistente à água 50 metros, tela AMOLED de 1.4 polegadas, notificações de apps, bateria com 7 dias de duração.",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    price: 1299.99,
    installments: "8x de R$ 162,49"
  },
  {
    productName: "Câmera DSLR Profissional",
    descriptionShort: "Câmera DSLR com sensor Full Frame de 24.2MP, gravação em 4K 60fps, estabilização de imagem 5 eixos, tela touch de 3 polegadas, WiFi e Bluetooth, kit com lente 18-55mm, ideal para fotografia profissional.",
    photo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    price: 4599.99,
    installments: "12x de R$ 383,33"
  },
  {
    productName: "Monitor Gamer Curvo",
    descriptionShort: "Monitor curvo de 34 polegadas, resolução WQHD 3440x1440, taxa de atualização 144Hz, tempo de resposta 1ms, tecnologia FreeSync Premium, painel VA, suporte ajustável, entradas HDMI e DisplayPort.",
    photo: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    price: 2899.99,
    installments: "10x de R$ 289,99"
  },
  {
    productName: "Teclado Mecânico RGB",
    descriptionShort: "Teclado mecânico para gaming com switches Cherry MX Red, iluminação RGB personalizável, construção em alumínio, cabo removível, teclas programáveis, descanso de pulso magnético, compatível com PC, Mac e consoles.",
    photo: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
    price: 649.99,
    installments: "5x de R$ 129,99"
  },
  {
    productName: "Console de Videogame",
    descriptionShort: "Console de última geração com processador custom de 8 núcleos, SSD de 1TB, suporte a ray tracing, saída em 4K 120Hz, compatibilidade com gerações anteriores, controle sem fio incluído, assinatura de 12 meses online.",
    photo: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
    price: 4499.99,
    installments: "15x de R$ 299,99"
  }
];