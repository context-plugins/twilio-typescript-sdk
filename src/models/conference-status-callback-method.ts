import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type ConferenceStatusCallbackMethod =
  | (typeof ConferenceStatusCallbackMethod)[keyof typeof ConferenceStatusCallbackMethod]
  | (string & {});

export const conferenceStatusCallbackMethodSchema: EnumSchema<ConferenceStatusCallbackMethod> =
  s.enumOf<ConferenceStatusCallbackMethod>(ConferenceStatusCallbackMethod);
