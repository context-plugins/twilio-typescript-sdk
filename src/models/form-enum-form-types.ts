import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Type of this Form. Currently only `form-push` is supported. */
export const FormEnumFormTypes = {
  FormPush: "form-push",
} as const;
export type FormEnumFormTypes = (typeof FormEnumFormTypes)[keyof typeof FormEnumFormTypes] | (string & {});

export const formEnumFormTypesSchema: EnumSchema<FormEnumFormTypes> =
  s.enumOf<FormEnumFormTypes>(FormEnumFormTypes);
