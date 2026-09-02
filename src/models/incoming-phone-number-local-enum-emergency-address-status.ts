import { s, type EnumSchema } from "../core/index.js";

export const IncomingPhoneNumberLocalEnumEmergencyAddressStatus = {
  Registered: "registered",
  Unregistered: "unregistered",
  PendingRegistration: "pending-registration",
  RegistrationFailure: "registration-failure",
  PendingUnregistration: "pending-unregistration",
  UnregistrationFailure: "unregistration-failure",
} as const;
export type IncomingPhoneNumberLocalEnumEmergencyAddressStatus =
  | (typeof IncomingPhoneNumberLocalEnumEmergencyAddressStatus)[keyof typeof IncomingPhoneNumberLocalEnumEmergencyAddressStatus]
  | (string & {});

export const incomingPhoneNumberLocalEnumEmergencyAddressStatusSchema: EnumSchema<IncomingPhoneNumberLocalEnumEmergencyAddressStatus> =
  s.enumOf<IncomingPhoneNumberLocalEnumEmergencyAddressStatus>(
    IncomingPhoneNumberLocalEnumEmergencyAddressStatus,
  );
