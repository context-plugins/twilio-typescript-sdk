import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formEnumFormTypesSchema, type FormEnumFormTypes } from "./form-enum-form-types.js";

export type VerifyV2Form = {
  formType?: FormEnumFormTypes;
  forms?: Record<string, unknown> | null;
  formMeta?: Record<string, unknown> | null;
  url?: string | null;
};

export const verifyV2FormSchema: Schema<VerifyV2Form> = s.object<VerifyV2Form>({
  formType: s.optional(s.lazy(() => formEnumFormTypesSchema)),
  forms: s.optionalNullable(s.record(s.string(), s.unknown())),
  formMeta: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    formType: "form_type",
    formMeta: "form_meta",
  },
});
