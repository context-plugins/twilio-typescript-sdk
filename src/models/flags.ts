import { s, type Schema } from "../core/index.js";

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
