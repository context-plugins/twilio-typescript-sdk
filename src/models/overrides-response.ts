import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originalLineTypeSchema, type OriginalLineType } from "./original-line-type.js";
import { overriddenLineTypeSchema, type OverriddenLineType } from "./overridden-line-type.js";

export type OverridesResponse = {
  phoneNumber?: string;
  originalLineType?: OriginalLineType;
  overriddenLineType?: OverriddenLineType;
  overrideReason?: string;
  overrideTimestamp?: Date;
  overriddenByAccountSid?: string;
};

export const overridesResponseSchema: Schema<OverridesResponse> = s.object<OverridesResponse>({
  phoneNumber: s.optional(s.string()),
  originalLineType: s.optional(s.lazy(() => originalLineTypeSchema)),
  overriddenLineType: s.optional(s.lazy(() => overriddenLineTypeSchema)),
  overrideReason: s.optional(s.string()),
  overrideTimestamp: s.optional(s.dateTime()),
  overriddenByAccountSid: s.optional(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
    originalLineType: "original_line_type",
    overriddenLineType: "overridden_line_type",
    overrideReason: "override_reason",
    overrideTimestamp: "override_timestamp",
    overriddenByAccountSid: "overridden_by_account_sid",
  },
});
