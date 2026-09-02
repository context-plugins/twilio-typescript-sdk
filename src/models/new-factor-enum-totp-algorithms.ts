import { s, type EnumSchema } from "../core/index.js";

export const NewFactorEnumTotpAlgorithms = {
  Sha1: "sha1",
  Sha256: "sha256",
  Sha512: "sha512",
} as const;
export type NewFactorEnumTotpAlgorithms =
  | (typeof NewFactorEnumTotpAlgorithms)[keyof typeof NewFactorEnumTotpAlgorithms]
  | (string & {});

export const newFactorEnumTotpAlgorithmsSchema: EnumSchema<NewFactorEnumTotpAlgorithms> =
  s.enumOf<NewFactorEnumTotpAlgorithms>(NewFactorEnumTotpAlgorithms);
