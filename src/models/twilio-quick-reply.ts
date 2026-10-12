import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quickReplyActionSchema, type QuickReplyAction } from "./quick-reply-action.js";

/** twilio/quick-reply templates let recipients tap, rather than type, to respond to the message. */
export type TwilioQuickReply = {
  body: string;
  actions: QuickReplyAction[];
};

export const twilioQuickReplySchema: Schema<TwilioQuickReply> = s.object<TwilioQuickReply>({
  body: s.string(),
  actions: s.array(s.lazy(() => quickReplyActionSchema)),
});
