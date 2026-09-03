import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status4Schema, type Status4 } from "./status4.js";

export type FlexV1Instance = {
  flexInstanceSid?: string;
  accountSid?: string;
  status?: Status4;
  dateCreated?: Date;
  dateUpdated?: Date;
};

export const flexV1InstanceSchema: Schema<FlexV1Instance> = s.object<FlexV1Instance>({
  flexInstanceSid: s.optional(s.string()),
  accountSid: s.optional(s.string()),
  status: s.optional(s.lazy(() => status4Schema)),
  dateCreated: s.optional(s.dateTime()),
  dateUpdated: s.optional(s.dateTime()),
  _keysMap: {
    flexInstanceSid: "flex_instance_sid",
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
