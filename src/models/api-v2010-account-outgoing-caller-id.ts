import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountOutgoingCallerId = {
  sid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  accountSid?: string | null;
  phoneNumber?: string | null;
  uri?: string | null;
};

export const apiV2010AccountOutgoingCallerIdSchema: Schema<ApiV2010AccountOutgoingCallerId> =
  s.object<ApiV2010AccountOutgoingCallerId>({
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      accountSid: "account_sid",
      phoneNumber: "phone_number",
    },
  });
