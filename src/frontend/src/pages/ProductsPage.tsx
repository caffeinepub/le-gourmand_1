import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '../cart/useCart';
import { products } from '../data/products';
import { formatCurrency } from '../lib/format';
import { toast } from 'sonner';

export default function ProductsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-foreground">
          Gourmet Products
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our exclusive selection of premium artisanal products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={product.imageSrc}
                alt={product.altText}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{product.name}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-semibold text-foreground">
                {formatCurrency(product.price)}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleAddToCart(product)}
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
