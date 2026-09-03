import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptOutConfig = {
  optOutSid: string;
  accountSid: string;
  friendlyName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const optOutConfigSchema: Schema<OptOutConfig> = s.object<OptOutConfig>({
  optOutSid: s.string(),
  accountSid: s.string(),
  friendlyName: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  _keysMap: {
    optOutSid: "opt_out_sid",
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
