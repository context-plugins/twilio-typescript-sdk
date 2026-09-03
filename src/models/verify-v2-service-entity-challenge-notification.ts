import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceEntityChallengeNotification = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  entitySid?: string | null;
  identity?: string | null;
  challengeSid?: string | null;
  priority?: string | null;
  ttl?: number;
  dateCreated?: Date | null;
};

export const verifyV2ServiceEntityChallengeNotificationSchema: Schema<VerifyV2ServiceEntityChallengeNotification> =
  s.object<VerifyV2ServiceEntityChallengeNotification>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    entitySid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    challengeSid: s.optionalNullable(s.string()),
    priority: s.optionalNullable(s.string()),
    ttl: s.optional(s.number()),
    dateCreated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      entitySid: "entity_sid",
      challengeSid: "challenge_sid",
      dateCreated: "date_created",
    },
  });
