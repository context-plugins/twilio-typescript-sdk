import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Compliance keywords for the application. */
export type ComplianceKeywords = {
  help?: string;
  stop?: string;
  info?: string;
  aide?: string;
  arret?: string;
  optOutFiltering?: boolean;
};

export const complianceKeywordsSchema: Schema<ComplianceKeywords> = s.object<ComplianceKeywords>({
  help: s.optional(s.string()),
  stop: s.optional(s.string()),
  info: s.optional(s.string()),
  aide: s.optional(s.string()),
  arret: s.optional(s.string()),
  optOutFiltering: s.optional(s.boolean()),
  _keysMap: {
    optOutFiltering: "opt_out_filtering",
  },
});
