import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The valid credential types supported by the API. The values of this enumeration are used for
 * versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to
 * the type of the authenticator.
 */
export const Type = {
  PublicKey: "public-key",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
