import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountCallUserDefinedMessage = {
  accountSid?: string | null;
  callSid?: string | null;
  sid?: string | null;
  dateCreated?: string | null;
};

export const apiV2010AccountCallUserDefinedMessageSchema: Schema<ApiV2010AccountCallUserDefinedMessage> =
  s.object<ApiV2010AccountCallUserDefinedMessage>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateCreated: "date_created",
    },
  });
