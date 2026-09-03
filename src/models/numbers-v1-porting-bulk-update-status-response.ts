import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersV1PortingBulkPhoneNumberUpdateDetailSchema,
  type NumbersV1PortingBulkPhoneNumberUpdateDetail,
} from "./numbers-v1-porting-bulk-phone-number-update-detail.js";

export type NumbersV1PortingBulkUpdateStatusResponse = {
  successfulUpdates: NumbersV1PortingBulkPhoneNumberUpdateDetail[];
  failedUpdates: NumbersV1PortingBulkPhoneNumberUpdateDetail[];
};

export const numbersV1PortingBulkUpdateStatusResponseSchema: Schema<NumbersV1PortingBulkUpdateStatusResponse> =
  s.object<NumbersV1PortingBulkUpdateStatusResponse>({
    successfulUpdates: s.array(s.lazy(() => numbersV1PortingBulkPhoneNumberUpdateDetailSchema)),
    failedUpdates: s.array(s.lazy(() => numbersV1PortingBulkPhoneNumberUpdateDetailSchema)),
    _keysMap: {
      successfulUpdates: "successful_updates",
      failedUpdates: "failed_updates",
    },
  });
