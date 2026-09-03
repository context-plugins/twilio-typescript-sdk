import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityMatchParameters = {
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  addressCountryCode?: string;
  nationalId?: string;
  dateOfBirth?: string;
};

export const identityMatchParametersSchema: Schema<IdentityMatchParameters> =
  s.object<IdentityMatchParameters>({
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    addressLine1: s.optional(s.string()),
    addressLine2: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    addressCountryCode: s.optional(s.string()),
    nationalId: s.optional(s.string()),
    dateOfBirth: s.optional(s.string()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      addressLine1: "address_line1",
      addressLine2: "address_line2",
      postalCode: "postal_code",
      addressCountryCode: "address_country_code",
      nationalId: "national_id",
      dateOfBirth: "date_of_birth",
    },
  });
