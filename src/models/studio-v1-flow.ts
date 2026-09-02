import { s, type Schema } from "../core/index.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "./flow-enum-status.js";

export type StudioV1Flow = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  status?: FlowEnumStatus;
  version?: number;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV1FlowSchema: Schema<StudioV1Flow> = s.object<StudioV1Flow>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => flowEnumStatusSchema)),
  version: s.optional(s.number()),
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
