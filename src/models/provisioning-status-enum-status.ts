import { s, type EnumSchema } from "../core/index.js";

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
