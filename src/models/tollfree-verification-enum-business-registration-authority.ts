import { s, type EnumSchema } from "../core/index.js";

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
