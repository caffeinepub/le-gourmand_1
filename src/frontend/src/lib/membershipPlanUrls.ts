import { MembershipType } from '../backend';

/**
 * Maps membership types to their external Tiendup subscription URLs
 */
export const membershipPlanUrls: Record<MembershipType, string> = {
  [MembershipType.simple]: 'https://le-gourmand.tiendup.com/p/membresia-simple',
  [MembershipType.normal]: 'https://le-gourmand.tiendup.com/p/suscripcion-normal',
  [MembershipType.premium]: 'https://le-gourmand.tiendup.com/p/membresia-premium',
  [MembershipType.none]: '', // No URL for none type
};

export function getMembershipPlanUrl(membershipType: MembershipType): string {
  return membershipPlanUrls[membershipType] || '';
}
