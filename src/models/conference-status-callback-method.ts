import { s, type EnumSchema } from "../core/index.js";

export const ConferenceStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type ConferenceStatusCallbackMethod =
  | (typeof ConferenceStatusCallbackMethod)[keyof typeof ConferenceStatusCallbackMethod]
  | (string & {});

export const conferenceStatusCallbackMethodSchema: EnumSchema<ConferenceStatusCallbackMethod> =
  s.enumOf<ConferenceStatusCallbackMethod>(ConferenceStatusCallbackMethod);
