import { EUPrivacyPolicyDialog } from "./EUPrivacyPolicyDialog";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";

//GOOD ✅
export function DialogGOOD() {
  const handleAccept = (id: string) => {
    // Handle user's acceptance of the policy
    console.log("User accepted the Privacy Policy. with id" + id);
  };

  const handleDeny = () => {
    // Handle user's denial of the policy
    console.log("User denied the Privacy Policy.");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Show the Dialog component based on your application logic */}
      {/* <PrivacyPolicyDialog
        onAccept={handleAccept}
        onDeny={handleDeny}
      /> */}
      <EUPrivacyPolicyDialog
        onAccept={handleAccept}
        onDeny={handleDeny}
      />
    </div>
  );
}
