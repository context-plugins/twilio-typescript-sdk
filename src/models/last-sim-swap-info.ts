import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastSimSwapInfo = {
  lastSimSwapDate?: Date;
  swappedPeriod?: string;
  swappedInPeriod?: boolean;
};

export const lastSimSwapInfoSchema: Schema<LastSimSwapInfo> = s.object<LastSimSwapInfo>({
  lastSimSwapDate: s.optional(s.dateTime()),
  swappedPeriod: s.optional(s.string()),
  swappedInPeriod: s.optional(s.boolean()),
  _keysMap: {
    lastSimSwapDate: "last_sim_swap_date",
    swappedPeriod: "swapped_period",
    swappedInPeriod: "swapped_in_period",
  },
});
