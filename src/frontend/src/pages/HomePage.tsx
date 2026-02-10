import { Sparkles, Crown, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide text-foreground">
          Welcome to LE GOURMAND
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          An exclusive private membership club for discerning food enthusiasts
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border/40">
          <div className="inline-flex p-4 rounded-full bg-accent/50">
            <Crown className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-serif">Premium Access</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Exclusive culinary experiences and VIP events reserved for members only
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border/40">
          <div className="inline-flex p-4 rounded-full bg-accent/50">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-serif">Curated Content</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Access to premium recipes, cooking classes, and expert consultations
          </p>
        </div>

        <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border/40">
          <div className="inline-flex p-4 rounded-full bg-accent/50">
            <Users className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-serif">Private Community</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Join an elite community of food lovers and culinary professionals
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center space-y-6 py-12 border-t border-border/40">
        <h2 className="text-3xl font-serif tracking-wide">The Art of Fine Dining</h2>
        <p className="text-muted-foreground leading-relaxed">
          LE GOURMAND is more than a membership—it's an invitation to a world of culinary excellence. 
          Our carefully curated experiences, exclusive events, and premium content are designed for those 
          who appreciate the finer things in life. Join us and elevate your gastronomic journey.
        </p>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16 pt-8">
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
      </footer>
    </div>
  );
}
