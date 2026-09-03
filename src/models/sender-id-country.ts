import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusOverrideInfoSchema, type StatusOverrideInfo } from "./status-override-info.js";
import { statusSchema, type Status } from "./status.js";

export type SenderIdCountry = {
  routingTableSid: string;
  isoCountry: string;
  dateCreated: Date;
  dateUpdated: Date;
  default: boolean;
  status: Status;
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
