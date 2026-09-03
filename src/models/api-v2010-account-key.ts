import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountKey = {
  sid?: string | null;
  friendlyName?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
};

export const apiV2010AccountKeySchema: Schema<ApiV2010AccountKey> = s.object<ApiV2010AccountKey>({
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
