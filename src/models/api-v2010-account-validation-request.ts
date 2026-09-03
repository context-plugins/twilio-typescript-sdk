import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountValidationRequest = {
  accountSid?: string | null;
  callSid?: string | null;
  friendlyName?: string | null;
  phoneNumber?: string | null;
  validationCode?: string | null;
};

export const apiV2010AccountValidationRequestSchema: Schema<ApiV2010AccountValidationRequest> =
  s.object<ApiV2010AccountValidationRequest>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    validationCode: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      friendlyName: "friendly_name",
      phoneNumber: "phone_number",
      validationCode: "validation_code",
    },
  });
