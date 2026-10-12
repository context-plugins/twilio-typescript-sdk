import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncStream = {
  /** The unique string that we created to identify the Sync Stream resource. */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of
   * the resource's `sid` in the URL to address the resource.
   */
  uniqueName?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync
   * Stream resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The absolute URL of the Message Stream resource. */
  url?: string | null;
  /** The URLs of the Stream's nested resources. */
  links?: Record<string, unknown> | null;
  /**
   * The date and time in GMT when the Message Stream expires and will be deleted, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Message Stream does not expire,
   * this value is `null`. The Stream might not be deleted immediately after it expires.
   */
  dateExpires?: Date | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The identity of the Stream's creator. If the Stream is created from the client SDK, the value
   * matches the Access Token's `identity` field. If the Stream was created from the REST API, the
   * value is 'system'.
   */
  createdBy?: string | null;
};

export const syncV1ServiceSyncStreamSchema: Schema<SyncV1ServiceSyncStream> =
  s.object<SyncV1ServiceSyncStream>({
    sid: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateExpires: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    createdBy: s.optionalNullable(s.string()),
    _keysMap: {
      uniqueName: "unique_name",
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
    },
  });
