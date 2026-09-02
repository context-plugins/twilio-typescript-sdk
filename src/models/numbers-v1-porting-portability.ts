import { s, type Schema } from "../core/index.js";
import {
  portingPortabilityEnumNumberTypeSchema,
  type PortingPortabilityEnumNumberType,
} from "./porting-portability-enum-number-type.js";

export type NumbersV1PortingPortability = {
  phoneNumber?: string | null;
  accountSid?: string | null;
  portable?: boolean | null;
  pinAndAccountNumberRequired?: boolean | null;
  notPortableReason?: string | null;
  notPortableReasonCode?: number | null;
  numberType?: PortingPortabilityEnumNumberType;
  country?: string | null;
  url?: string | null;
};

export const numbersV1PortingPortabilitySchema: Schema<NumbersV1PortingPortability> =
  s.object<NumbersV1PortingPortability>({
    phoneNumber: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    portable: s.optionalNullable(s.boolean()),
    pinAndAccountNumberRequired: s.optionalNullable(s.boolean()),
    notPortableReason: s.optionalNullable(s.string()),
    notPortableReasonCode: s.optionalNullable(s.number()),
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
