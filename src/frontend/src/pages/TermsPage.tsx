import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-serif">Membership Agreement</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">1. Introduction</h3>
                  <p>
                    Welcome to LE GOURMAND, an exclusive private membership club for discerning food enthusiasts. 
                    By accessing or using our services, you agree to be bound by these Terms and Conditions.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">2. Membership</h3>
                  <p>
                    LE GOURMAND offers three membership tiers: Simple, Normal, and Premium. Each membership 
                    provides access to exclusive content, events, and benefits as described in the membership 
                    plans section.
                  </p>
                  <p>
                    Membership is personal and non-transferable. You may not share your account credentials 
                    with others or allow others to access your membership benefits.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">3. Payment and Fees</h3>
                  <p>
                    Membership fees are charged as one-time payments according to the selected plan. All fees 
                    are non-refundable unless otherwise stated in our refund policy.
                  </p>
                  <p>
                    We reserve the right to modify membership fees with 30 days' notice to existing members.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">4. Member Conduct</h3>
                  <p>
                    Members are expected to conduct themselves with respect and courtesy toward other members, 
                    staff, and partners. We reserve the right to terminate membership for violations of our 
                    community guidelines.
                  </p>
                  <p>
                    Prohibited activities include but are not limited to: harassment, discrimination, illegal 
                    activities, and misuse of club resources or facilities.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">5. Content and Intellectual Property</h3>
                  <p>
                    All content provided through LE GOURMAND, including recipes, videos, articles, and other 
                    materials, is protected by copyright and other intellectual property rights.
                  </p>
                  <p>
                    Members may access and use content for personal, non-commercial purposes only. Reproduction, 
                    distribution, or commercial use of content without written permission is strictly prohibited.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">6. Privacy and Data Protection</h3>
                  <p>
                    We are committed to protecting your privacy. Your personal information is collected and 
                    processed in accordance with applicable data protection laws.
                  </p>
                  <p>
                    We use your information to provide membership services, communicate with you, and improve 
                    our offerings. We do not sell your personal information to third parties.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">7. Events and Reservations</h3>
                  <p>
                    Access to exclusive events is subject to availability and may require advance reservation. 
                    Event cancellation policies vary and will be communicated at the time of booking.
                  </p>
                  <p>
                    We reserve the right to cancel or reschedule events due to circumstances beyond our control.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">8. Termination</h3>
                  <p>
                    Either party may terminate membership at any time. Members may cancel by contacting our 
                    support team. We may terminate membership for violation of these terms or for any reason 
                    with appropriate notice.
                  </p>
                  <p>
                    Upon termination, access to member benefits and content will cease immediately.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">9. Limitation of Liability</h3>
                  <p>
                    LE GOURMAND and its affiliates shall not be liable for any indirect, incidental, special, 
                    or consequential damages arising from your use of our services.
                  </p>
                  <p>
                    Our total liability shall not exceed the amount paid by you for membership in the twelve 
                    months preceding the claim.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">10. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these Terms and Conditions at any time. Material changes 
                    will be communicated to members via email or through our platform.
                  </p>
                  <p>
                    Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">11. Contact Information</h3>
                  <p>
                    For questions about these Terms and Conditions or our services, please contact us through 
                    your member portal or email our support team.
                  </p>
                </section>

                <section className="space-y-3 pt-4 border-t border-border/40">
                  <p className="text-xs">
                    By using LE GOURMAND services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms and Conditions.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
