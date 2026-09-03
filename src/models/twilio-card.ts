import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardActionSchema, type CardAction } from "./card-action.js";

export type TwilioCard = {
  title?: string;
  subtitle?: string;
  media?: string[];
  actions?: CardAction[];
};

export const twilioCardSchema: Schema<TwilioCard> = s.object<TwilioCard>({
  title: s.optional(s.string()),
  subtitle: s.optional(s.string()),
  media: s.optional(s.array(s.string())),
  actions: s.optional(s.array(s.lazy(() => cardActionSchema))),
});
