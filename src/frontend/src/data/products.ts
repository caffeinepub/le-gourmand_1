import type { Product } from '../cart/cartTypes';

export const products: Product[] = [
  {
    id: 'cheese-board',
    name: 'Artisan Cheese Board',
    description: 'A curated selection of aged cheeses from renowned European creameries, perfect for sophisticated palates.',
    price: 89.99,
    imageSrc: '/assets/generated/product-cheese-board.dim_1024x1024.png',
    altText: 'Artisan cheese board with aged European cheeses',
  },
  {
    id: 'olive-oil',
    name: 'Premium Olive Oil',
    description: 'Cold-pressed extra virgin olive oil from century-old groves in Tuscany, delivering exceptional flavor.',
    price: 45.00,
    imageSrc: '/assets/generated/product-olive-oil.dim_1024x1024.png',
    altText: 'Premium extra virgin olive oil from Tuscany',
  },
  {
    id: 'chocolate-truffles',
    name: 'Dark Chocolate Truffles',
    description: 'Handcrafted Belgian dark chocolate truffles infused with exotic spices and premium liqueurs.',
    price: 65.00,
    imageSrc: '/assets/generated/product-chocolate-truffles.dim_1024x1024.png',
    altText: 'Handcrafted Belgian dark chocolate truffles',
  },
];
