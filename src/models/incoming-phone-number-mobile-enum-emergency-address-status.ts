import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of address registration with emergency services. A registered emergency address will
 * be used during handling of emergency calls from this number.
 */
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
