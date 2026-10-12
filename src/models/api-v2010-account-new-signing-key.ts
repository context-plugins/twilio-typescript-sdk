import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountNewSigningKey = {
  /** The unique string that that we created to identify the NewSigningKey resource. */
  sid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /**
   * The secret your application uses to sign Access Tokens and to authenticate to the REST API (you
   * will use this as the basic-auth `password`). **Note that for security reasons, this field is
   * ONLY returned when the API Key is first created.**
   */
  secret?: string | null;
};

export const apiV2010AccountNewSigningKeySchema: Schema<ApiV2010AccountNewSigningKey> =
  s.object<ApiV2010AccountNewSigningKey>({
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    secret: s.optionalNullable(s.string()),
    _keysMap: {
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
