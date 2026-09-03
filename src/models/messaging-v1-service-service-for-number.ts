import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceServiceForNumber = {
  numberSid?: string | null;
  sid?: string | null;
  friendlyName?: string | null;
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
