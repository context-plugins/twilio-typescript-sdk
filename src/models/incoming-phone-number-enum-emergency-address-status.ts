import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
