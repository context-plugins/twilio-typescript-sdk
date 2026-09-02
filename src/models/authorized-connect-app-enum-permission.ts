import { s, type EnumSchema } from "../core/index.js";

export const AuthorizedConnectAppEnumPermission = {
  GetAll: "get-all",
  PostAll: "post-all",
} as const;
export type AuthorizedConnectAppEnumPermission =
  | (typeof AuthorizedConnectAppEnumPermission)[keyof typeof AuthorizedConnectAppEnumPermission]
  | (string & {});

export const authorizedConnectAppEnumPermissionSchema: EnumSchema<AuthorizedConnectAppEnumPermission> =
  s.enumOf<AuthorizedConnectAppEnumPermission>(AuthorizedConnectAppEnumPermission);
