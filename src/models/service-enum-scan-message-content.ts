import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
