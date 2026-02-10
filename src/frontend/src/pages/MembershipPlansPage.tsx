import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Sparkles, Star } from 'lucide-react';

interface MembershipPlan {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  isPopular?: boolean;
  features: string[];
  subscribeUrl: string;
}

const plans: MembershipPlan[] = [
  {
    name: 'Simple',
    description: 'Access to curated content and basic member benefits.',
    price: '$29/mes',
    icon: <Star className="w-6 h-6" />,
    features: ['Access to exclusive recipes', 'Monthly newsletter', 'Community forum access'],
    subscribeUrl: 'https://le-gourmand.tiendup.com/p/membresia-simple'
  },
  {
    name: 'Normal',
    description: 'Everything in Simple, plus exclusive offers and priority access.',
    price: '$59/mes',
    icon: <Sparkles className="w-6 h-6" />,
    isPopular: true,
    features: ['Everything in Simple', 'Weekly cooking classes', 'Priority support', 'Seasonal gift box'],
    subscribeUrl: 'https://le-gourmand.tiendup.com/p/suscripcion-normal'
  },
  {
    name: 'Premium',
    description: 'Full access to all benefits, VIP experiences, and premium content.',
    price: '$99/mes',
    icon: <Crown className="w-6 h-6" />,
    features: [
      'Everything in Normal',
      'Private chef consultations',
      'VIP event invitations',
      'Personalized meal planning'
    ],
    subscribeUrl: 'https://le-gourmand.tiendup.com/p/membresia-premium'
  }
];

export default function MembershipPlansPage() {
  const handleSubscribe = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-serif tracking-wider text-foreground">LE GOURMAND</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-foreground">
            Membership Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to elevate your culinary journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col transition-all duration-300 hover:scale-105 ${
                plan.isPopular
                  ? 'border-primary/50 shadow-lg shadow-primary/10'
                  : 'border-border/40 hover:border-border/60'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1 text-xs font-medium tracking-wider">
                    POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="space-y-4 pb-8">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-accent/50 text-accent-foreground">{plan.icon}</div>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-serif tracking-wide">{plan.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{plan.description}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <div className="space-y-1">
                  <div className="text-4xl font-serif tracking-tight text-foreground">{plan.price}</div>
                  <p className="text-xs text-muted-foreground tracking-wide">Billed monthly</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/40">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className="w-full font-medium tracking-wide"
                  variant={plan.isPopular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => handleSubscribe(plan.subscribeUrl)}
                >
                  Suscribirse
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} LE GOURMAND. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'le-gourmand'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
