import { s, type Schema } from "../core/index.js";
import { sessionEnumModeSchema, type SessionEnumMode } from "./session-enum-mode.js";
import { sessionEnumStatusSchema, type SessionEnumStatus } from "./session-enum-status.js";

export type ProxyV1ServiceSession = {
  sid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  dateStarted?: Date | null;
  dateEnded?: Date | null;
  dateLastInteraction?: Date | null;
  dateExpiry?: Date | null;
  uniqueName?: string | null;
  status?: SessionEnumStatus;
  closedReason?: string | null;
  ttl?: number;
  mode?: SessionEnumMode;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSessionSchema: Schema<ProxyV1ServiceSession> = s.object<ProxyV1ServiceSession>({
  sid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  dateStarted: s.optionalNullable(s.dateTime()),
  dateEnded: s.optionalNullable(s.dateTime()),
  dateLastInteraction: s.optionalNullable(s.dateTime()),
  dateExpiry: s.optionalNullable(s.dateTime()),
  uniqueName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => sessionEnumStatusSchema)),
  closedReason: s.optionalNullable(s.string()),
  ttl: s.optional(s.number()),
  mode: s.optional(s.lazy(() => sessionEnumModeSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    serviceSid: "service_sid",
    accountSid: "account_sid",
    dateStarted: "date_started",
    dateEnded: "date_ended",
    dateLastInteraction: "date_last_interaction",
    dateExpiry: "date_expiry",
    uniqueName: "unique_name",
    closedReason: "closed_reason",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
