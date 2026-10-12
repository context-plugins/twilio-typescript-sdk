import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * twilio/media is used to send file attachments, or to send long text via MMS in the US and Canada.
 * As such, the twilio/media type must contain at least ONE of text or media content.
 */
export type TwilioMedia = {
  body?: string;
  media: string[];
};

export const twilioMediaSchema: Schema<TwilioMedia> = s.object<TwilioMedia>({
  body: s.optional(s.string()),
  media: s.array(s.string()),
});
