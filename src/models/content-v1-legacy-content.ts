import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentV1LegacyContent = {
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The unique string that that we created to identify the Content resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content
   * resource.
   */
  accountSid?: string | null;
  /** A string name used to describe the Content resource. Not visible to the end recipient. */
  friendlyName?: string | null;
  /**
   * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource
   * is in.
   */
  language?: string | null;
  /**
   * Defines the default placeholder values for variables included in the Content resource. e.g.
   * {"1": "Customer_Name"}.
   */
  variables?: Record<string, unknown> | null;
  /**
   * The [Content types](https://www.twilio.com/docs/content-api/content-types-overview) (e.g.
   * twilio/text) for this Content resource.
   */
  types?: Record<string, unknown> | null;
  /**
   * The string name of the legacy content template associated with this Content resource, unique
   * across all template names for its account. Only lowercase letters, numbers and underscores are
   * allowed
   */
  legacyTemplateName?: string | null;
  /** The string body field of the legacy content template associated with this Content resource */
  legacyBody?: string | null;
  /** The URL of the resource, relative to `https://content.twilio.com`. */
  url?: string | null;
};

export const contentV1LegacyContentSchema: Schema<ContentV1LegacyContent> = s.object<ContentV1LegacyContent>({
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
