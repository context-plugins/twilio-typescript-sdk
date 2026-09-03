import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProxyV1ServiceSessionParticipant = {
  sid?: string | null;
  sessionSid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  identifier?: string | null;
  proxyIdentifier?: string | null;
  proxyIdentifierSid?: string | null;
  dateDeleted?: Date | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSessionParticipantSchema: Schema<ProxyV1ServiceSessionParticipant> =
  s.object<ProxyV1ServiceSessionParticipant>({
    sid: s.optionalNullable(s.string()),
    sessionSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    identifier: s.optionalNullable(s.string()),
    proxyIdentifier: s.optionalNullable(s.string()),
    proxyIdentifierSid: s.optionalNullable(s.string()),
    dateDeleted: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      sessionSid: "session_sid",
      serviceSid: "service_sid",
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      proxyIdentifier: "proxy_identifier",
      proxyIdentifierSid: "proxy_identifier_sid",
      dateDeleted: "date_deleted",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
