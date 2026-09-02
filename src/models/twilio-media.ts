import { s, type Schema } from "../core/index.js";

export type TwilioMedia = {
  body?: string;
  media: string[];
};

export const twilioMediaSchema: Schema<TwilioMedia> = s.object<TwilioMedia>({
  body: s.optional(s.string()),
  media: s.array(s.string()),
});
