import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProvisioningStatusEnumStatus = {
  Active: "active",
  InProgress: "in-progress",
  NotConfigured: "not-configured",
  Failed: "failed",
} as const;
export type ProvisioningStatusEnumStatus =
  | (typeof ProvisioningStatusEnumStatus)[keyof typeof ProvisioningStatusEnumStatus]
  | (string & {});

export const provisioningStatusEnumStatusSchema: EnumSchema<ProvisioningStatusEnumStatus> =
  s.enumOf<ProvisioningStatusEnumStatus>(ProvisioningStatusEnumStatus);
