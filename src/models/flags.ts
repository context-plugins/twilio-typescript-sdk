import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Flags = {
  national?: boolean;
  international?: boolean;
};

export const flagsSchema: Schema<Flags> = s.object<Flags>({
  national: s.optional(s.boolean()),
  international: s.optional(s.boolean()),
  _keysMap: {
    national: "National",
    international: "International",
  },
});
