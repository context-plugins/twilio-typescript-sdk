import { s, type Schema } from "../core/index.js";

export type ContentV1LegacyContent1 = {
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  language?: string | null;
  variables?: Record<string, unknown> | null;
  types?: Record<string, unknown> | null;
  legacyTemplateName?: string | null;
  legacyBody?: string | null;
  url?: string | null;
};

export const contentV1LegacyContent1Schema: Schema<ContentV1LegacyContent1> =
  s.object<ContentV1LegacyContent1>({
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    language: s.optionalNullable(s.string()),
    variables: s.optionalNullable(s.record(s.string(), s.unknown())),
    types: s.optionalNullable(s.record(s.string(), s.unknown())),
    legacyTemplateName: s.optionalNullable(s.string()),
    legacyBody: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      legacyTemplateName: "legacy_template_name",
      legacyBody: "legacy_body",
    },
  });
