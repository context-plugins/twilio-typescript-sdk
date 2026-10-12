import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceServiceForNumber = {
  /** The SID to identify the number resource. */
  numberSid?: string | null;
  /** The SID of the messaging service that the phone number is in. */
  sid?: string | null;
  /** The string that you assigned to describe the messaging service resource. */
  friendlyName?: string | null;
  /** The absolute URL of the Service resource. */
  url?: string | null;
};

export const messagingV1ServiceServiceForNumberSchema: Schema<MessagingV1ServiceServiceForNumber> =
  s.object<MessagingV1ServiceServiceForNumber>({
    numberSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      numberSid: "number_sid",
      friendlyName: "friendly_name",
    },
  });
