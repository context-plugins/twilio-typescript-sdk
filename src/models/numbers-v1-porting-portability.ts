import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  portingPortabilityEnumNumberTypeSchema,
  type PortingPortabilityEnumNumberType,
} from "./porting-portability-enum-number-type.js";

export type NumbersV1PortingPortability = {
  /**
   * The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g.
   * +16175551212).
   */
  phoneNumber?: string | null;
  /**
   * Account Sid that the phone number belongs to in Twilio. This is only returned for phone numbers
   * that already exist in Twilio’s inventory and belong to your account or sub account.
   */
  accountSid?: string | null;
  /**
   * Boolean flag indicates if the phone number can be ported into Twilio through the Porting API or
   * not.
   */
  portable?: boolean | null;
  /**
   * Indicates if the port in process will require a personal identification number (PIN) and an
   * account number for this phone number. If this is true you will be required to submit both a PIN
   * and account number from the losing carrier for this number when opening a port in request.
   * These fields will be required in order to complete the port in process to Twilio.
   */
  pinAndAccountNumberRequired?: boolean | null;
  /** Reason why the phone number cannot be ported into Twilio, `null` otherwise. */
  notPortableReason?: string | null;
  /**
   * The Portability Reason Code for the phone number if it cannot be ported into Twilio, `null`
   * otherwise.
   */
  notPortableReasonCode?: number | null;
  /** The type of the requested phone number. One of `LOCAL`, `UNKNOWN`, `MOBILE`, `TOLL-FREE`. */
  numberType?: PortingPortabilityEnumNumberType;
  /** Country the phone number belongs to. */
  country?: string | null;
  /** This is the url of the request that you're trying to reach out to locate the resource. */
  url?: string | null;
};

export const numbersV1PortingPortabilitySchema: Schema<NumbersV1PortingPortability> =
  s.object<NumbersV1PortingPortability>({
    phoneNumber: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    portable: s.optionalNullable(s.boolean()),
    pinAndAccountNumberRequired: s.optionalNullable(s.boolean()),
    notPortableReason: s.optionalNullable(s.string()),
    notPortableReasonCode: s.optionalNullable(s.int()),
    numberType: s.optional(s.lazy(() => portingPortabilityEnumNumberTypeSchema)),
    country: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      phoneNumber: "phone_number",
      accountSid: "account_sid",
      pinAndAccountNumberRequired: "pin_and_account_number_required",
      notPortableReason: "not_portable_reason",
      notPortableReasonCode: "not_portable_reason_code",
      numberType: "number_type",
    },
  });
