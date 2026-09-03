import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Capabilities7 = {
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
  fax?: boolean;
};

export const capabilities7Schema: Schema<Capabilities7> = s.object<Capabilities7>({
  mms: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  voice: s.optional(s.boolean()),
  fax: s.optional(s.boolean()),
});
