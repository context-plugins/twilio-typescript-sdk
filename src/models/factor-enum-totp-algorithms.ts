import { s, type EnumSchema } from "../core/index.js";

export const FactorEnumTotpAlgorithms = {
  Sha1: "sha1",
  Sha256: "sha256",
  Sha512: "sha512",
} as const;
export type FactorEnumTotpAlgorithms =
  | (typeof FactorEnumTotpAlgorithms)[keyof typeof FactorEnumTotpAlgorithms]
  | (string & {});

export const factorEnumTotpAlgorithmsSchema: EnumSchema<FactorEnumTotpAlgorithms> =
  s.enumOf<FactorEnumTotpAlgorithms>(FactorEnumTotpAlgorithms);
