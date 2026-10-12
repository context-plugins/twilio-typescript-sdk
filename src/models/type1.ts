import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The valid credential types supported by the API. The values of this enumeration are used for
 * versioning the `AuthenticatorAssertion` and `AuthenticatorAttestation` structures according to
 * the type of the authenticator.
 */
export const Type1 = {
  PublicKey: "public-key",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
