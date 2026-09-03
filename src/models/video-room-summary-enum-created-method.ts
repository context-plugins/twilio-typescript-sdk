import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumCreatedMethod = {
  Sdk: "sdk",
  AdHoc: "ad_hoc",
  Api: "api",
} as const;
export type VideoRoomSummaryEnumCreatedMethod =
  | (typeof VideoRoomSummaryEnumCreatedMethod)[keyof typeof VideoRoomSummaryEnumCreatedMethod]
  | (string & {});

export const videoRoomSummaryEnumCreatedMethodSchema: EnumSchema<VideoRoomSummaryEnumCreatedMethod> =
  s.enumOf<VideoRoomSummaryEnumCreatedMethod>(VideoRoomSummaryEnumCreatedMethod);
