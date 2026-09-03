import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreamEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type StreamEnumUpdateStatus =
  | (typeof StreamEnumUpdateStatus)[keyof typeof StreamEnumUpdateStatus]
  | (string & {});

export const streamEnumUpdateStatusSchema: EnumSchema<StreamEnumUpdateStatus> =
  s.enumOf<StreamEnumUpdateStatus>(StreamEnumUpdateStatus);
