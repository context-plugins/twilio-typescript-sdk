import { s, type Schema } from "../core/index.js";

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
