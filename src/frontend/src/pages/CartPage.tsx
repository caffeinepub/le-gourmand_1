import { Trash2, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '../cart/useCart';
import { formatCurrency } from '../lib/format';

export default function CartPage() {
  const { items, removeFromCart, total } = useCart();

  const isEmpty = items.length === 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-foreground">
          Shopping Cart
        </h1>
        <p className="text-lg text-muted-foreground">
          {isEmpty ? 'Your cart is empty' : `${items.length} item${items.length !== 1 ? 's' : ''} in your cart`}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {isEmpty ? (
          <Card className="text-center py-16">
            <CardContent className="space-y-6">
              <div className="inline-flex p-6 rounded-full bg-muted">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif">Your cart is empty</h3>
                <p className="text-muted-foreground">
                  Browse our gourmet products and add items to your cart
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.product.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.product.imageSrc}
                          alt={item.product.altText}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <h3 className="font-serif text-lg">{item.product.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {item.product.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </span>
                          <span className="text-lg font-semibold">
                            {formatCurrency(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cart Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
