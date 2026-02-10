import { Home, CreditCard, User, FileText, ShoppingBag, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuthButton from './AuthButton';
import { useCart } from '../cart/useCart';
import type { Route } from '../App';

interface AppShellProps {
  children: React.ReactNode;
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export default function AppShell({ children, currentRoute, onNavigate }: AppShellProps) {
  const { itemCount } = useCart();

  const navItems = [
    { route: 'home' as Route, icon: Home, label: 'Home' },
    { route: 'products' as Route, icon: Package, label: 'Products' },
    { route: 'cart' as Route, icon: ShoppingBag, label: 'Cart', badge: itemCount > 0 ? itemCount : undefined },
    { route: 'memberships' as Route, icon: CreditCard, label: 'Plans' },
    { route: 'profile' as Route, icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/assets/logo big.png" 
              alt="LE GOURMAND logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-serif tracking-[0.2em] text-foreground">
              LE GOURMAND
            </h1>
          </div>
          <AuthButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/40 backdrop-blur-sm z-50">
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-around max-w-2xl mx-auto">
            {navItems.map(({ route, icon: Icon, label, badge }) => (
              <Button
                key={route}
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(route)}
                className={`flex flex-col items-center gap-1 h-auto py-2 px-3 relative ${
                  currentRoute === route
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {badge !== undefined && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-4 min-w-4 px-1 text-[10px] flex items-center justify-center"
                    >
                      {badge}
                    </Badge>
                  )}
                </div>
                <span className="text-xs font-medium">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
