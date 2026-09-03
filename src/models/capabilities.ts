import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Capabilities = {
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
  fax?: boolean;
};

export const capabilitiesSchema: Schema<Capabilities> = s.object<Capabilities>({
  mms: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  voice: s.optional(s.boolean()),
  fax: s.optional(s.boolean()),
});
