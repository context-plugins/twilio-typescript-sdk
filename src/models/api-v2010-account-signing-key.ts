import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountSigningKey = {
  sid?: string | null;
  friendlyName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
};

export const apiV2010AccountSigningKeySchema: Schema<ApiV2010AccountSigningKey> =
  s.object<ApiV2010AccountSigningKey>({
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    _keysMap: {
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
