import endpoints from "./endpoints";
import { FeedbackForm } from "./feedbackForm";
import { FeedbackService } from "./services/feedbackService";

//GOOD ✅
export function FeedbackGOOD() {
  const feedbackServiceV1 = new FeedbackService(
    endpoints.FEEDBACK.v1
  );
  const feedbackServiceV2 = new FeedbackService(
    endpoints.FEEDBACK.v2
  );

  return <FeedbackForm feedbackService={feedbackServiceV1} />;
}
