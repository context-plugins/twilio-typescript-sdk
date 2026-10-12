import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateSenderIdCountryDefault = {
  /** Default Sender Id to use for replacement */
  default?: boolean;
};

export const updateSenderIdCountryDefaultSchema: Schema<UpdateSenderIdCountryDefault> =
  s.object<UpdateSenderIdCountryDefault>({
    default: s.optional(s.boolean()),
  });
