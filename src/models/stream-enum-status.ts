import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreamEnumStatus = {
  InProgress: "in-progress",
  Stopped: "stopped",
} as const;
export type StreamEnumStatus = (typeof StreamEnumStatus)[keyof typeof StreamEnumStatus] | (string & {});

export const streamEnumStatusSchema: EnumSchema<StreamEnumStatus> =
  s.enumOf<StreamEnumStatus>(StreamEnumStatus);
