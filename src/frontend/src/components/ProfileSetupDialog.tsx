import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSaveCallerUserProfile } from '../hooks/useQueries';
import { MembershipType } from '../backend';
import { toast } from 'sonner';

interface ProfileSetupDialogProps {
  open: boolean;
  onComplete: () => void;
}

export default function ProfileSetupDialog({ open, onComplete }: ProfileSetupDialogProps) {
  const [displayName, setDisplayName] = useState('');
  const saveProfile = useSaveCallerUserProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!displayName.trim()) {
      toast.error('Please enter your name');
      return;
    }

    try {
      await saveProfile.mutateAsync({
        displayName: displayName.trim(),
        membershipType: MembershipType.none,
      });
      toast.success('Profile created successfully');
      onComplete();
    } catch (error) {
      console.error('Failed to save profile:', error);
      toast.error('Failed to create profile');
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Welcome to LE GOURMAND</DialogTitle>
            <DialogDescription>
              Please enter your name to complete your profile setup
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <Label htmlFor="displayName" className="text-sm font-medium">
              Your Name
            </Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={saveProfile.isPending || !displayName.trim()}
              className="w-full"
            >
              {saveProfile.isPending ? 'Creating Profile...' : 'Continue'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
