import { s, type Schema } from "../core/index.js";
import { callToActionActionSchema, type CallToActionAction } from "./call-to-action-action.js";

export type TwilioCallToAction = {
  body: string;
  actions: CallToActionAction[];
};

export const twilioCallToActionSchema: Schema<TwilioCallToAction> = s.object<TwilioCallToAction>({
  body: s.string(),
  actions: s.array(s.lazy(() => callToActionActionSchema)),
});
