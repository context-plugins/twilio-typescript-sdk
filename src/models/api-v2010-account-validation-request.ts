import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountValidationRequest = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the
   * Caller ID.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Caller ID is
   * associated with.
   */
  callSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format,
   * which consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The 6 digit validation code that someone must enter to validate the Caller ID when
   * `phone_number` is called.
   */
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
