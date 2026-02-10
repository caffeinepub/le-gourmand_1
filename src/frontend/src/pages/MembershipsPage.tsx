import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Sparkles, Star } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useSelectMembershipType, useGetCallerUserProfile } from '../hooks/useQueries';
import { MembershipType } from '../backend';
import { toast } from 'sonner';
import { getMembershipPlanUrl } from '../lib/membershipPlanUrls';

interface MembershipPlan {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  isPopular?: boolean;
  features: string[];
  membershipType: MembershipType;
}

const plans: MembershipPlan[] = [
  {
    name: 'Simple',
    description: 'Access to curated content and basic member benefits.',
    price: '$50',
    icon: <Star className="w-6 h-6" />,
    features: ['Access to exclusive recipes', 'Monthly newsletter', 'Community forum access'],
    membershipType: MembershipType.simple,
  },
  {
    name: 'Normal',
    description: 'Everything in Simple, plus exclusive offers and priority access.',
    price: '$200',
    icon: <Sparkles className="w-6 h-6" />,
    isPopular: true,
    features: ['Everything in Simple', 'Weekly cooking classes', 'Priority support', 'Seasonal gift box'],
    membershipType: MembershipType.normal,
  },
  {
    name: 'Premium',
    description: 'Full access to all benefits, VIP experiences, and premium content.',
    price: '$350',
    icon: <Crown className="w-6 h-6" />,
    features: [
      'Everything in Normal',
      'Private chef consultations',
      'VIP event invitations',
      'Personalized meal planning',
    ],
    membershipType: MembershipType.premium,
  },
];

export default function MembershipsPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const selectMembership = useSelectMembershipType();
  const { data: userProfile } = useGetCallerUserProfile();

  const handleSelectPlan = async (membershipType: MembershipType) => {
    if (!identity) {
      toast.info('Please sign in to select a membership plan');
      try {
        await login();
      } catch (error) {
        console.error('Login error:', error);
      }
      return;
    }

    try {
      // Open the external plan URL in a new tab
      const planUrl = getMembershipPlanUrl(membershipType);
      if (planUrl) {
        window.open(planUrl, '_blank', 'noopener,noreferrer');
      }

      // Persist the membership selection in the backend
      await selectMembership.mutateAsync(membershipType);
      toast.success('Membership plan selected successfully');
    } catch (error) {
      console.error('Failed to select membership:', error);
      toast.error('Failed to select membership plan');
    }
  };

  const isCurrentPlan = (membershipType: MembershipType) => {
    return userProfile?.membershipType === membershipType;
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-foreground">
          Membership Plans
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to elevate your culinary journey
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="px-4 py-1 text-xs font-medium tracking-wider">
                  POPULAR
                </Badge>
              </div>
            )}

            <CardHeader className="space-y-4 pb-6">
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
                <p className="text-xs text-muted-foreground tracking-wide">One-time membership</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/40">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
                onClick={() => handleSelectPlan(plan.membershipType)}
                disabled={selectMembership.isPending || loginStatus === 'logging-in' || isCurrentPlan(plan.membershipType)}
              >
                {isCurrentPlan(plan.membershipType) ? 'Current Plan' : 'Select Plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
