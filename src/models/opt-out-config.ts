import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptOutConfig = {
  /** The unique SID identifier for the opt-out configuration */
  optOutSid: string;
  /** The SID of the account that owns this opt-out configuration */
  accountSid: string;
  /** A human-readable name for the opt-out configuration */
  friendlyName?: string | null;
  /** The date and time when the opt-out configuration was created */
  dateCreated?: Date | null;
  /** The date and time when the opt-out configuration was last updated */
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
