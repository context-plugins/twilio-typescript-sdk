import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The organizational authority for business registrations. Required for all business types except
 * SOLE_PROPRIETOR.
 */
export const TollfreeVerificationEnumBusinessRegistrationAuthority = {
  Ein: "EIN",
  Cbn: "CBN",
  Crn: "CRN",
  ProvincialNumber: "PROVINCIAL_NUMBER",
  Vat: "VAT",
  Acn: "ACN",
  Abn: "ABN",
  Brn: "BRN",
  Siren: "SIREN",
  Siret: "SIRET",
  Nzbn: "NZBN",
  UStIdNr: "USt-IdNr",
  Cif: "CIF",
  Nif: "NIF",
  Cnpj: "CNPJ",
  Uid: "UID",
  Neq: "NEQ",
  Other: "OTHER",
} as const;
export type TollfreeVerificationEnumBusinessRegistrationAuthority =
  | (typeof TollfreeVerificationEnumBusinessRegistrationAuthority)[keyof typeof TollfreeVerificationEnumBusinessRegistrationAuthority]
  | (string & {});

export const tollfreeVerificationEnumBusinessRegistrationAuthoritySchema: EnumSchema<TollfreeVerificationEnumBusinessRegistrationAuthority> =
  s.enumOf<TollfreeVerificationEnumBusinessRegistrationAuthority>(
    TollfreeVerificationEnumBusinessRegistrationAuthority,
  );
