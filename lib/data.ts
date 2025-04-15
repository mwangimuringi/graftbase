// /lib/data.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: 'Electronics' | 'Accessories';
  }
  
  export const fakeProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop',
      price: 999,
      description: 'High-performance laptop for developers.',
      imageUrl: '/images/laptop.jpg',
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 699,
      description: 'Sleek smartphone with a great camera.',
      imageUrl: '/images/smartphone.jpg',
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Headphones',
      price: 199,
      description: 'Noise-cancelling wireless headphones.',
      imageUrl: '/images/headphones.jpg',
      category: 'Accessories',
    },
  ];
  
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  export async function getAllProducts(): Promise<Product[]> {
    await sleep(300);
    return fakeProducts;
  }
  
  export async function getProductById(id: string): Promise<Product | undefined> {
    await sleep(200);
    return fakeProducts.find((p) => p.id === id);
  }
  