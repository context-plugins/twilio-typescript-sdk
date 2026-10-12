import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowsPageSchema, type FlowsPage } from "./flows-page.js";

/**
 * twilio/flows templates allow you to send multiple messages in a set order with text or select
 * options
 */
export type TwilioFlows = {
  body: string;
  buttonText: string;
  subtitle?: string;
  mediaUrl?: string;
  pages: FlowsPage[];
  type: string;
};

export const twilioFlowsSchema: Schema<TwilioFlows> = s.object<TwilioFlows>({
  body: s.string(),
  buttonText: s.string(),
  subtitle: s.optional(s.string()),
  mediaUrl: s.optional(s.string()),
  pages: s.array(s.lazy(() => flowsPageSchema)),
  type: s.string(),
  _keysMap: {
    buttonText: "button_text",
    mediaUrl: "media_url",
  },
});
