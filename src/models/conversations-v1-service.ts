import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1Service = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this service.
   */
  accountSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The human-readable name of this service, limited to 256 characters. Optional. */
  friendlyName?: string | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this service. */
  url?: string | null;
  /**
   * Contains absolute API resource URLs to access conversations, users, roles, bindings and
   * configuration of this service.
   */
  links?: Record<string, unknown> | null;
};

export const conversationsV1ServiceSchema: Schema<ConversationsV1Service> = s.object<ConversationsV1Service>({
  accountSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
