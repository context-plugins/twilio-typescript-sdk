import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "./flow-enum-status.js";

export type StudioV2Flow = {
  sid?: string | null;
  accountSid?: string | null;
  authorSid?: string | null;
  friendlyName?: string | null;
  definition?: Record<string, unknown> | null;
  status?: FlowEnumStatus;
  revision?: number;
  commitMessage?: string | null;
  valid?: boolean | null;
  errors?: Record<string, unknown>[] | null;
  warnings?: Record<string, unknown>[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  webhookUrl?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV2FlowSchema: Schema<StudioV2Flow> = s.object<StudioV2Flow>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  authorSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  definition: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => flowEnumStatusSchema)),
  revision: s.optional(s.number()),
  commitMessage: s.optionalNullable(s.string()),
  valid: s.optionalNullable(s.boolean()),
  errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  warnings: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  webhookUrl: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    authorSid: "author_sid",
    friendlyName: "friendly_name",
    commitMessage: "commit_message",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    webhookUrl: "webhook_url",
  },
});
