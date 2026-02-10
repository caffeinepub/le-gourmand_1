import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn } from 'lucide-react';

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { identity, login, loginStatus } = useInternetIdentity();

  if (!identity) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-serif">Sign In Required</CardTitle>
            <CardDescription>
              Please sign in to access this feature
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              onClick={login}
              disabled={loginStatus === 'logging-in'}
              size="lg"
              className="gap-2"
            >
              <LogIn className="w-4 h-4" />
              {loginStatus === 'logging-in' ? 'Signing in...' : 'Sign In'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
