import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReassignedNumberParameters = {
  lastVerifiedDate?: string;
};

export const reassignedNumberParametersSchema: Schema<ReassignedNumberParameters> =
  s.object<ReassignedNumberParameters>({
    lastVerifiedDate: s.optional(s.string()),
    _keysMap: {
      lastVerifiedDate: "last_verified_date",
    },
  });
