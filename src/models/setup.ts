import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Setup = {
  chargesApply: boolean;
};

export const setupSchema: Schema<Setup> = s.object<Setup>({
  chargesApply: s.boolean(),
  _keysMap: {
    chargesApply: "charges_apply",
  },
});
