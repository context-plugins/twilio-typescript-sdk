import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV2FlowValidate = {
  valid?: boolean | null;
};

export const studioV2FlowValidateSchema: Schema<StudioV2FlowValidate> = s.object<StudioV2FlowValidate>({
  valid: s.optionalNullable(s.boolean()),
});
