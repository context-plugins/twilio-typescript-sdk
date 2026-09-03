import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
