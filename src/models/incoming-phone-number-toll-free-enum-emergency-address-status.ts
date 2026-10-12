import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of address registration with emergency services. A registered emergency address will
 * be used during handling of emergency calls from this number.
 */
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
