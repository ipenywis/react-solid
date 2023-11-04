import { v4 as uuidv4 } from "uuid";

export function prepareFeedbackDataColumn(feedback: string) {
  return `${feedback}+${uuidv4()}`;
}
