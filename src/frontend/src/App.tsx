import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import AppShell from './components/AppShell';
import HomePage from './pages/HomePage';
import MembershipsPage from './pages/MembershipsPage';
import ProfilePage from './pages/ProfilePage';
import TermsPage from './pages/TermsPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { CartProvider } from './cart/CartContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export type Route = 'home' | 'memberships' | 'profile' | 'terms' | 'products' | 'cart';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'memberships':
        return <MembershipsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'terms':
        return <TermsPage />;
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <AppShell currentRoute={currentRoute} onNavigate={setCurrentRoute}>
            {renderPage()}
          </AppShell>
          <Toaster />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
