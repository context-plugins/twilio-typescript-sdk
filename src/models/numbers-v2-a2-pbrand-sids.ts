import { s, type Schema } from "../core/index.js";

export type NumbersV2A2PBrandSids = {
  brandRegistrationSid?: string | null;
  externalBrandId?: string | null;
};

export const numbersV2A2PBrandSidsSchema: Schema<NumbersV2A2PBrandSids> = s.object<NumbersV2A2PBrandSids>({
  brandRegistrationSid: s.optionalNullable(s.string()),
  externalBrandId: s.optionalNullable(s.string()),
});
