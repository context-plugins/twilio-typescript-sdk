import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callToActionActionSchema, type CallToActionAction } from "./call-to-action-action.js";

/**
 * twilio/call-to-action buttons let recipients tap to trigger actions such as launching a website
 * or making a phone call.
 */
export type TwilioCallToAction = {
  body: string;
  actions: CallToActionAction[];
};

export const twilioCallToActionSchema: Schema<TwilioCallToAction> = s.object<TwilioCallToAction>({
  body: s.string(),
  actions: s.array(s.lazy(() => callToActionActionSchema)),
});
