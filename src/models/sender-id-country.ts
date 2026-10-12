import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusOverrideInfoSchema, type StatusOverrideInfo } from "./status-override-info.js";
import { statusSchema, type Status } from "./status.js";

export type SenderIdCountry = {
  /** The unique identifier of the Sender ID Country. */
  routingTableSid: string;
  /** The ISO country code. */
  isoCountry: string;
  /** The date and time when the country routing table was created. */
  dateCreated: Date;
  /** The date and time when the country routing table was last updated. */
  dateUpdated: Date;
  /** Indicates if this is the default routing table for the country. */
  default: boolean;
  /** The status of the country for the sender Id */
  status: Status;
  /** The override status of the country for the sender Id */
  statusOverrideInfo?: StatusOverrideInfo;
};

export const senderIdCountrySchema: Schema<SenderIdCountry> = s.object<SenderIdCountry>({
  routingTableSid: s.string(),
  isoCountry: s.string(),
  dateCreated: s.dateTime(),
  dateUpdated: s.dateTime(),
  default: s.boolean(),
  status: statusSchema,
  statusOverrideInfo: s.optional(s.lazy(() => statusOverrideInfoSchema)),
  _keysMap: {
    routingTableSid: "routing_table_sid",
    isoCountry: "iso_country",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    statusOverrideInfo: "status_override_info",
  },
});
