import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus = {
  Registered: "registered",
  Unregistered: "unregistered",
  PendingRegistration: "pending-registration",
  RegistrationFailure: "registration-failure",
  PendingUnregistration: "pending-unregistration",
  UnregistrationFailure: "unregistration-failure",
} as const;
export type IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus =
  | (typeof IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus)[keyof typeof IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus]
  | (string & {});

export const incomingPhoneNumberTollFreeEnumEmergencyAddressStatusSchema: EnumSchema<IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus> =
  s.enumOf<IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus>(
    IncomingPhoneNumberTollFreeEnumEmergencyAddressStatus,
  );
