import { s, type Schema } from "../core/index.js";

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
