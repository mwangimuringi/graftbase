// /lib/data.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  export const fakeProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop',
      price: 999,
      description: 'High-performance laptop for developers.',
      imageUrl: '/images/laptop.jpg',
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 699,
      description: 'Sleek smartphone with a great camera.',
      imageUrl: '/images/smartphone.jpg',
    },
    {
      id: '3',
      name: 'Headphones',
      price: 199,
      description: 'Noise-cancelling wireless headphones.',
      imageUrl: '/images/headphones.jpg',
    },
  ];
  
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  export async function getAllProducts(): Promise<Product[]> {
    await sleep(300); // simulate network delay
    return fakeProducts;
  }
  
  export async function getProductById(id: string): Promise<Product | undefined> {
    await sleep(200); // simulate network delay
    return fakeProducts.find((p) => p.id === id);
  }
  