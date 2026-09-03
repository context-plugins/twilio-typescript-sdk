import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentV1ContentAndApprovals = {
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  language?: string | null;
  variables?: Record<string, unknown> | null;
  types?: Record<string, unknown> | null;
  approvalRequests?: Record<string, unknown> | null;
};

export const contentV1ContentAndApprovalsSchema: Schema<ContentV1ContentAndApprovals> =
  s.object<ContentV1ContentAndApprovals>({
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    language: s.optionalNullable(s.string()),
    variables: s.optionalNullable(s.record(s.string(), s.unknown())),
    types: s.optionalNullable(s.record(s.string(), s.unknown())),
    approvalRequests: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      approvalRequests: "approval_requests",
    },
  });
