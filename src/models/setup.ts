import { s, type Schema } from "../core/index.js";

export type Setup = {
  chargesApply: boolean;
};

export const setupSchema: Schema<Setup> = s.object<Setup>({
  chargesApply: s.boolean(),
  _keysMap: {
    chargesApply: "charges_apply",
  },
});
