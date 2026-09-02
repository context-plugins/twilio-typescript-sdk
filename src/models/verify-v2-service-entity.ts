import { s, type Schema } from "../core/index.js";

export type VerifyV2ServiceEntity = {
  sid?: string | null;
  identity?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const verifyV2ServiceEntitySchema: Schema<VerifyV2ServiceEntity> = s.object<VerifyV2ServiceEntity>({
  sid: s.optionalNullable(s.string()),
  identity: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    serviceSid: "service_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
