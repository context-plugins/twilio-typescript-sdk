import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberEnumEmergencyAddressStatus = {
  Registered: "registered",
  Unregistered: "unregistered",
  PendingRegistration: "pending-registration",
  RegistrationFailure: "registration-failure",
  PendingUnregistration: "pending-unregistration",
  UnregistrationFailure: "unregistration-failure",
} as const;
export type IncomingPhoneNumberEnumEmergencyAddressStatus =
  | (typeof IncomingPhoneNumberEnumEmergencyAddressStatus)[keyof typeof IncomingPhoneNumberEnumEmergencyAddressStatus]
  | (string & {});

export const incomingPhoneNumberEnumEmergencyAddressStatusSchema: EnumSchema<IncomingPhoneNumberEnumEmergencyAddressStatus> =
  s.enumOf<IncomingPhoneNumberEnumEmergencyAddressStatus>(IncomingPhoneNumberEnumEmergencyAddressStatus);
