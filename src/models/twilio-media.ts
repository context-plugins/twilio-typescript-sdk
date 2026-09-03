import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwilioMedia = {
  body?: string;
  media: string[];
};

export const twilioMediaSchema: Schema<TwilioMedia> = s.object<TwilioMedia>({
  body: s.optional(s.string()),
  media: s.array(s.string()),
});
