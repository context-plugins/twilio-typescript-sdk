import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2A2PBrandSids = {
  /** Sid associated with campaign's brand */
  brandRegistrationSid?: string | null;
  /** The external brand identifier (e.g., TCR Brand ID) */
  externalBrandId?: string | null;
};

export const numbersV2A2PBrandSidsSchema: Schema<NumbersV2A2PBrandSids> = s.object<NumbersV2A2PBrandSids>({
  brandRegistrationSid: s.optionalNullable(s.string()),
  externalBrandId: s.optionalNullable(s.string()),
});
