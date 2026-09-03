import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierSchema, type Carrier } from "./carrier.js";

export type CountyCarrierValue = {
  country?: string;
  carriers?: Carrier[];
};

export const countyCarrierValueSchema: Schema<CountyCarrierValue> = s.object<CountyCarrierValue>({
  country: s.optional(s.string()),
  carriers: s.optional(s.array(s.lazy(() => carrierSchema))),
});
