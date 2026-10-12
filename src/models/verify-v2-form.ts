import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formEnumFormTypesSchema, type FormEnumFormTypes } from "./form-enum-form-types.js";

export type VerifyV2Form = {
  /** The Type of this Form. Currently only `form-push` is supported. */
  formType?: FormEnumFormTypes;
  /**
   * Object that contains the available forms for this type. This available forms are given in the
   * standard [JSON Schema](https://json-schema.org/) format
   */
  forms?: Record<string, unknown> | null;
  /**
   * Additional information for the available forms for this type. E.g. The separator string used
   * for `binding` in a Factor push.
   */
  formMeta?: Record<string, unknown> | null;
  /** The URL to access the forms for this type. */
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
