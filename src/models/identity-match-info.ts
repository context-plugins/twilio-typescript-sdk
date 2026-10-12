import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityMatchInfo = {
  firstNameMatch?: string;
  lastNameMatch?: string;
  addressLinesMatch?: string;
  cityMatch?: string;
  stateMatch?: string;
  postalCodeMatch?: string;
  addressCountryMatch?: string;
  nationalIdMatch?: string;
  dateOfBirthMatch?: string;
  summaryScore?: number;
  errorCode?: number;
  errorMessage?: string;
};

export const identityMatchInfoSchema: Schema<IdentityMatchInfo> = s.object<IdentityMatchInfo>({
  firstNameMatch: s.optional(s.string()),
  lastNameMatch: s.optional(s.string()),
  addressLinesMatch: s.optional(s.string()),
  cityMatch: s.optional(s.string()),
  stateMatch: s.optional(s.string()),
  postalCodeMatch: s.optional(s.string()),
  addressCountryMatch: s.optional(s.string()),
  nationalIdMatch: s.optional(s.string()),
  dateOfBirthMatch: s.optional(s.string()),
  summaryScore: s.optional(s.int()),
  errorCode: s.optional(s.int()),
  errorMessage: s.optional(s.string()),
  _keysMap: {
    firstNameMatch: "first_name_match",
    lastNameMatch: "last_name_match",
    addressLinesMatch: "address_lines_match",
    cityMatch: "city_match",
    stateMatch: "state_match",
    postalCodeMatch: "postal_code_match",
    addressCountryMatch: "address_country_match",
    nationalIdMatch: "national_id_match",
    dateOfBirthMatch: "date_of_birth_match",
    summaryScore: "summary_score",
    errorCode: "error_code",
    errorMessage: "error_message",
  },
});
