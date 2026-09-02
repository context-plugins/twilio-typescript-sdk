import { s, type EnumSchema } from "../core/index.js";

export const StreamEnumUpdateStatus = {
  Stopped: "stopped",
} as const;
export type StreamEnumUpdateStatus =
  | (typeof StreamEnumUpdateStatus)[keyof typeof StreamEnumUpdateStatus]
  | (string & {});

export const streamEnumUpdateStatusSchema: EnumSchema<StreamEnumUpdateStatus> =
  s.enumOf<StreamEnumUpdateStatus>(StreamEnumUpdateStatus);
