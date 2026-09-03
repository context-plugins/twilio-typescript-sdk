import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorizedConnectAppEnumPermission = {
  GetAll: "get-all",
  PostAll: "post-all",
} as const;
export type AuthorizedConnectAppEnumPermission =
  | (typeof AuthorizedConnectAppEnumPermission)[keyof typeof AuthorizedConnectAppEnumPermission]
  | (string & {});

export const authorizedConnectAppEnumPermissionSchema: EnumSchema<AuthorizedConnectAppEnumPermission> =
  s.enumOf<AuthorizedConnectAppEnumPermission>(AuthorizedConnectAppEnumPermission);
