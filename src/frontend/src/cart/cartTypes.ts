export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  altText: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
