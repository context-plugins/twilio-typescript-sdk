import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomingPhoneNumberMobileEnumEmergencyAddressStatus = {
  Registered: "registered",
  Unregistered: "unregistered",
  PendingRegistration: "pending-registration",
  RegistrationFailure: "registration-failure",
  PendingUnregistration: "pending-unregistration",
  UnregistrationFailure: "unregistration-failure",
} as const;
export type IncomingPhoneNumberMobileEnumEmergencyAddressStatus =
  | (typeof IncomingPhoneNumberMobileEnumEmergencyAddressStatus)[keyof typeof IncomingPhoneNumberMobileEnumEmergencyAddressStatus]
  | (string & {});

export const incomingPhoneNumberMobileEnumEmergencyAddressStatusSchema: EnumSchema<IncomingPhoneNumberMobileEnumEmergencyAddressStatus> =
  s.enumOf<IncomingPhoneNumberMobileEnumEmergencyAddressStatus>(
    IncomingPhoneNumberMobileEnumEmergencyAddressStatus,
  );
