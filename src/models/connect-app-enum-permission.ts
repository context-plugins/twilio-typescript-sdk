import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConnectAppEnumPermission = {
  GetAll: "get-all",
  PostAll: "post-all",
} as const;
export type ConnectAppEnumPermission =
  | (typeof ConnectAppEnumPermission)[keyof typeof ConnectAppEnumPermission]
  | (string & {});

export const connectAppEnumPermissionSchema: EnumSchema<ConnectAppEnumPermission> =
  s.enumOf<ConnectAppEnumPermission>(ConnectAppEnumPermission);
