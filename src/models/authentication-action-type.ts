import { s, type EnumSchema } from "../core/index.js";

export const AuthenticationActionType = {
  CopyCode: "COPY_CODE",
} as const;
export type AuthenticationActionType =
  | (typeof AuthenticationActionType)[keyof typeof AuthenticationActionType]
  | (string & {});

export const authenticationActionTypeSchema: EnumSchema<AuthenticationActionType> =
  s.enumOf<AuthenticationActionType>(AuthenticationActionType);
