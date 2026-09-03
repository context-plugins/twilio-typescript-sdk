import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingSchema, type Billing } from "./billing.js";
import { capabilities1Schema, type Capabilities1 } from "./capabilities1.js";
import { certificationsSchema, type Certifications } from "./certifications.js";
import { flagsSchema, type Flags } from "./flags.js";
import { geographySchema, type Geography } from "./geography.js";

export type NumbersV1AvailablePhoneNumber = {
  did?: string | null;
  inventoryDidSid?: string | null;
  friendlyName?: string | null;
  type?: string | null;
  npa?: string | null;
  nxx?: string | null;
  locked?: boolean | null;
  lockedUntil?: number | null;
  capabilities?: Capabilities1 | null;
  geography?: Geography | null;
  addressRequirements?: string | null;
  certifications?: Certifications | null;
  billing?: Billing | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  beta?: boolean | null;
  voiceEmergencyCapable?: boolean | null;
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
    lockedUntil: s.optionalNullable(s.number()),
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
