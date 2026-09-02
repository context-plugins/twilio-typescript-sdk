import { s, type EnumSchema } from "../core/index.js";

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
