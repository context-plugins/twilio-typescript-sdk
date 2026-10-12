import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and
 * defaults to `POST`.
 */
export const ConferenceStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type ConferenceStatusCallbackMethod =
  | (typeof ConferenceStatusCallbackMethod)[keyof typeof ConferenceStatusCallbackMethod]
  | (string & {});

export const conferenceStatusCallbackMethodSchema: EnumSchema<ConferenceStatusCallbackMethod> =
  s.enumOf<ConferenceStatusCallbackMethod>(ConferenceStatusCallbackMethod);
