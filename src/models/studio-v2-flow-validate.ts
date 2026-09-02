import { s, type Schema } from "../core/index.js";

export type StudioV2FlowValidate = {
  valid?: boolean | null;
};

export const studioV2FlowValidateSchema: Schema<StudioV2FlowValidate> = s.object<StudioV2FlowValidate>({
  valid: s.optionalNullable(s.boolean()),
});
