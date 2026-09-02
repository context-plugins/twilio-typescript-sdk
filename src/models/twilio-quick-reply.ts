import { s, type Schema } from "../core/index.js";
import { quickReplyActionSchema, type QuickReplyAction } from "./quick-reply-action.js";

export type TwilioQuickReply = {
  body: string;
  actions: QuickReplyAction[];
};

export const twilioQuickReplySchema: Schema<TwilioQuickReply> = s.object<TwilioQuickReply>({
  body: s.string(),
  actions: s.array(s.lazy(() => quickReplyActionSchema)),
});
