import { s, type Schema } from "../core/index.js";
import { endUserEnumTypeSchema, type EndUserEnumType } from "./end-user-enum-type.js";

export type NumbersV2RegulatoryComplianceEndUser = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  type?: EndUserEnumType;
  attributes?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceEndUserSchema: Schema<NumbersV2RegulatoryComplianceEndUser> =
  s.object<NumbersV2RegulatoryComplianceEndUser>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => endUserEnumTypeSchema)),
    attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
