import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  provisioningStatusEnumStatusSchema,
  type ProvisioningStatusEnumStatus,
} from "./provisioning-status-enum-status.js";

export type FlexV1ProvisioningStatus = {
  status?: ProvisioningStatusEnumStatus;
  url?: string | null;
};

export const flexV1ProvisioningStatusSchema: Schema<FlexV1ProvisioningStatus> =
  s.object<FlexV1ProvisioningStatus>({
    status: s.optional(s.lazy(() => provisioningStatusEnumStatusSchema)),
    url: s.optionalNullable(s.string()),
  });
