import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthenticationActionType = {
  CopyCode: "COPY_CODE",
} as const;
export type AuthenticationActionType =
  | (typeof AuthenticationActionType)[keyof typeof AuthenticationActionType]
  | (string & {});

export const authenticationActionTypeSchema: EnumSchema<AuthenticationActionType> =
  s.enumOf<AuthenticationActionType>(AuthenticationActionType);
