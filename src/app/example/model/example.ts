export interface Example {
  _id: string;
  position: string;
  name: string;
  ppg: string;
}

export interface Product {
  name: string;
  price: number;
  imgUrl: string;
  // quantity: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  products: Product[];
}
