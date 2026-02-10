import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import RequireAuth from '../components/RequireAuth';
import ProfileSetupDialog from '../components/ProfileSetupDialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Crown, Sparkles, Star, Minus } from 'lucide-react';
import { MembershipType } from '../backend';

export default function ProfilePage() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading, isFetched, refetch } = useGetCallerUserProfile();

  const getMembershipIcon = (type: MembershipType) => {
    switch (type) {
      case MembershipType.premium:
        return <Crown className="w-5 h-5" />;
      case MembershipType.normal:
        return <Sparkles className="w-5 h-5" />;
      case MembershipType.simple:
        return <Star className="w-5 h-5" />;
      default:
        return <Minus className="w-5 h-5" />;
    }
  };

  const getMembershipLabel = (type: MembershipType) => {
    switch (type) {
      case MembershipType.premium:
        return 'Premium';
      case MembershipType.normal:
        return 'Normal';
      case MembershipType.simple:
        return 'Simple';
      default:
        return 'No Membership';
    }
  };

  const getMembershipVariant = (type: MembershipType): 'default' | 'secondary' | 'outline' => {
    switch (type) {
      case MembershipType.premium:
      case MembershipType.normal:
        return 'default';
      case MembershipType.simple:
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getDisplayName = () => {
    if (userProfile?.displayName) {
      return userProfile.displayName;
    }
    if (identity) {
      const principal = identity.getPrincipal().toString();
      return `${principal.slice(0, 8)}...${principal.slice(-4)}`;
    }
    return 'Guest';
  };

  const showProfileSetup = !!identity && !isLoading && isFetched && userProfile === null;

  return (
    <RequireAuth>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-serif tracking-wide">Your Profile</h1>
            <p className="text-muted-foreground">Manage your membership and account details</p>
          </div>

          {/* Profile Card */}
          <Card>
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-6 rounded-full bg-accent/50">
                  <User className="w-12 h-12 text-accent-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl font-serif">{getDisplayName()}</CardTitle>
                <CardDescription>Member since {new Date().getFullYear()}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Membership Type</p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={getMembershipVariant(userProfile?.membershipType || MembershipType.none)}
                      className="gap-1.5"
                    >
                      {getMembershipIcon(userProfile?.membershipType || MembershipType.none)}
                      {getMembershipLabel(userProfile?.membershipType || MembershipType.none)}
                    </Badge>
                  </div>
                </div>
              </div>

              {userProfile?.membershipType === MembershipType.none && (
                <div className="text-center p-6 border border-border/40 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    You haven't selected a membership plan yet. Visit the Plans page to choose one.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Principal ID</p>
                <p className="text-xs font-mono bg-muted/50 p-3 rounded break-all">
                  {identity?.getPrincipal().toString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {showProfileSetup && (
        <ProfileSetupDialog
          open={showProfileSetup}
          onComplete={() => refetch()}
        />
      )}
    </RequireAuth>
  );
}
