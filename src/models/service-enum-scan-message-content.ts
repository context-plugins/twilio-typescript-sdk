import { s, type EnumSchema } from "../core/index.js";

export const ServiceEnumScanMessageContent = {
  Inherit: "inherit",
  Enable: "enable",
  Disable: "disable",
} as const;
export type ServiceEnumScanMessageContent =
  | (typeof ServiceEnumScanMessageContent)[keyof typeof ServiceEnumScanMessageContent]
  | (string & {});

export const serviceEnumScanMessageContentSchema: EnumSchema<ServiceEnumScanMessageContent> =
  s.enumOf<ServiceEnumScanMessageContent>(ServiceEnumScanMessageContent);
