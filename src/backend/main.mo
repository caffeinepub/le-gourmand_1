import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Incorporate authentication system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type MembershipType = {
    #none;
    #simple;
    #normal;
    #premium;
  };

  public type UserProfile = {
    displayName : ?Text;
    membershipType : MembershipType;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func selectMembershipType(membershipType : MembershipType) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can select membership types");
    };

    let existingProfile = userProfiles.get(caller);
    let updatedProfile = switch (existingProfile) {
      case (?profile) { { profile with membershipType } };
      case (null) {
        {
          displayName = null;
          membershipType;
        };
      };
    };

    userProfiles.add(caller, updatedProfile);
  };
};
