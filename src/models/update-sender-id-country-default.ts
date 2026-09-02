import { s, type Schema } from "../core/index.js";

export type UpdateSenderIdCountryDefault = {
  default?: boolean;
};

export const updateSenderIdCountryDefaultSchema: Schema<UpdateSenderIdCountryDefault> =
  s.object<UpdateSenderIdCountryDefault>({
    default: s.optional(s.boolean()),
  });
