import { s, type EnumSchema } from "../core/index.js";

export const StreamEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type StreamEnumStatus = (typeof StreamEnumStatus)[keyof typeof StreamEnumStatus] | (string & {});

export const streamEnumStatusSchema: EnumSchema<StreamEnumStatus> =
  s.enumOf<StreamEnumStatus>(StreamEnumStatus);
