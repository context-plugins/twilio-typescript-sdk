import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The set of permissions that you authorized for the Connect App. Can be: `get-all` or `post-all`.
 */
export const AuthorizedConnectAppEnumPermission = {
  GetAll: "get-all",
  PostAll: "post-all",
} as const;
export type AuthorizedConnectAppEnumPermission =
  | (typeof AuthorizedConnectAppEnumPermission)[keyof typeof AuthorizedConnectAppEnumPermission]
  | (string & {});

export const authorizedConnectAppEnumPermissionSchema: EnumSchema<AuthorizedConnectAppEnumPermission> =
  s.enumOf<AuthorizedConnectAppEnumPermission>(AuthorizedConnectAppEnumPermission);
