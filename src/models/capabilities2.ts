import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Capabilities2 = {
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
};

export const capabilities2Schema: Schema<Capabilities2> = s.object<Capabilities2>({
  mms: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  voice: s.optional(s.boolean()),
});
