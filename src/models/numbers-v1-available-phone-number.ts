import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingSchema, type Billing } from "./billing.js";
import { capabilities1Schema, type Capabilities1 } from "./capabilities1.js";
import { certificationsSchema, type Certifications } from "./certifications.js";
import { flagsSchema, type Flags } from "./flags.js";
import { geographySchema, type Geography } from "./geography.js";

export type NumbersV1AvailablePhoneNumber = {
  /** The phone number in E.164 format. */
  did?: string | null;
  /** The unique string that identifies the inventory DID resource. */
  inventoryDidSid?: string | null;
  /** A human-readable phone number in national format. */
  friendlyName?: string | null;
  /** The type of phone number. Can be Local, Mobile, TollFree, etc. */
  type?: string | null;
  /** The North American Numbering Plan (NANP) area code of the phone number. */
  npa?: string | null;
  /** The three-digit exchange code of the phone number. */
  nxx?: string | null;
  /** Whether the phone number is locked for purchase. */
  locked?: boolean | null;
  /** The Unix timestamp when the phone number lock expires. */
  lockedUntil?: number | null;
  /**
   * The set of Boolean properties that describes the SMS, MMS, Voice, and Fax capabilities of the
   * phone number.
   */
  capabilities?: Capabilities1 | null;
  /** The geographic information associated with the phone number. */
  geography?: Geography | null;
  /** The type of Address resource the phone number requires. */
  addressRequirements?: string | null;
  /** The certifications required for the phone number. */
  certifications?: Certifications | null;
  /** The billing information for the phone number. */
  billing?: Billing | null;
  /** The date and time in GMT when the resource was created specified in ISO 8601 format. */
  dateCreated?: Date | null;
  /** The date and time in GMT when the resource was last updated specified in ISO 8601 format. */
  dateUpdated?: Date | null;
  /** Whether the phone number is in beta. */
  beta?: boolean | null;
  /** Whether the phone number can handle emergency calls. */
  voiceEmergencyCapable?: boolean | null;
  /** The flags that describe the phone number features. */
  flags?: Flags | null;
};

export const numbersV1AvailablePhoneNumberSchema: Schema<NumbersV1AvailablePhoneNumber> =
  s.object<NumbersV1AvailablePhoneNumber>({
    did: s.optionalNullable(s.string()),
    inventoryDidSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    npa: s.optionalNullable(s.string()),
    nxx: s.optionalNullable(s.string()),
    locked: s.optionalNullable(s.boolean()),
    lockedUntil: s.optionalNullable(s.int()),
    capabilities: s.optionalNullable(s.lazy(() => capabilities1Schema)),
    geography: s.optionalNullable(s.lazy(() => geographySchema)),
    addressRequirements: s.optionalNullable(s.string()),
    certifications: s.optionalNullable(s.lazy(() => certificationsSchema)),
    billing: s.optionalNullable(s.lazy(() => billingSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    beta: s.optionalNullable(s.boolean()),
    voiceEmergencyCapable: s.optionalNullable(s.boolean()),
    flags: s.optionalNullable(s.lazy(() => flagsSchema)),
    _keysMap: {
      did: "Did",
      inventoryDidSid: "InventoryDidSid",
      friendlyName: "FriendlyName",
      type: "Type",
      npa: "Npa",
      nxx: "Nxx",
      locked: "Locked",
      lockedUntil: "LockedUntil",
      capabilities: "Capabilities",
      geography: "Geography",
      addressRequirements: "AddressRequirements",
      certifications: "Certifications",
      billing: "Billing",
      dateCreated: "DateCreated",
      dateUpdated: "DateUpdated",
      beta: "Beta",
      voiceEmergencyCapable: "VoiceEmergencyCapable",
      flags: "Flags",
    },
  });
