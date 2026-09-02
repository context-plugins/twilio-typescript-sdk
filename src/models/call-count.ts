import { s, type Schema } from "../core/index.js";

export type CallCount = {
  stshA?: number;
  stshB?: number;
  stshC?: number;
};

export const callCountSchema: Schema<CallCount> = s.object<CallCount>({
  stshA: s.optional(s.number()),
  stshB: s.optional(s.number()),
  stshC: s.optional(s.number()),
  _keysMap: {
    stshA: "stsh_a",
    stshB: "stsh_b",
    stshC: "stsh_c",
  },
});
