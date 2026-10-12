import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardActionSchema, type CardAction } from "./card-action.js";

/**
 * whatsapp/card is a structured template which can be used to send a series of related information.
 * It must include a body and at least one additional field.
 */
export type WhatsappCard = {
  body: string;
  footer?: string;
  media?: string[];
  headerText?: string;
  actions?: CardAction[];
};

export const whatsappCardSchema: Schema<WhatsappCard> = s.object<WhatsappCard>({
  body: s.string(),
  footer: s.optional(s.string()),
  media: s.optional(s.array(s.string())),
  headerText: s.optional(s.string()),
  actions: s.optional(s.array(s.lazy(() => cardActionSchema))),
  _keysMap: {
    headerText: "header_text",
  },
});
