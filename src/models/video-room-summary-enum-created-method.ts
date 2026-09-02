import { s, type EnumSchema } from "../core/index.js";

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
