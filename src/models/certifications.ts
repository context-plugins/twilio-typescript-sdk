import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The certifications required for the phone number. */
export type Certifications = {
  resident?: boolean;
  nonResident?: boolean;
};

export const certificationsSchema: Schema<Certifications> = s.object<Certifications>({
  resident: s.optional(s.boolean()),
  nonResident: s.optional(s.boolean()),
  _keysMap: {
    resident: "Resident",
    nonResident: "Non-Resident",
  },
});
