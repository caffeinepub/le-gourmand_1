import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function AuthButton() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      toast.success('Signed out successfully');
    } else {
      try {
        await login();
        toast.success('Signed in successfully');
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        } else {
          toast.error('Failed to sign in');
        }
      }
    }
  };

  return (
    <Button
      onClick={handleAuth}
      disabled={isLoggingIn}
      variant={isAuthenticated ? 'outline' : 'default'}
      size="sm"
      className="gap-2"
    >
      {isLoggingIn ? (
        'Signing in...'
      ) : isAuthenticated ? (
        <>
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </>
      ) : (
        <>
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Sign In</span>
        </>
      )}
    </Button>
  );
}
