import { s, type EnumSchema } from "../core/index.js";

export const FormEnumFormTypes = {
  FormPush: "form-push",
} as const;
export type FormEnumFormTypes = (typeof FormEnumFormTypes)[keyof typeof FormEnumFormTypes] | (string & {});

export const formEnumFormTypesSchema: EnumSchema<FormEnumFormTypes> =
  s.enumOf<FormEnumFormTypes>(FormEnumFormTypes);
