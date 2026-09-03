import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { leaseTypeSchema, type LeaseType } from "./lease-type.js";
import { paymentFrequencySchema, type PaymentFrequency } from "./payment-frequency.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";
import { trafficTypeSchema, type TrafficType } from "./traffic-type.js";

export type Setup1 = {
  requestType?: RequestType;
  trafficType?: TrafficType;
  leaseType?: LeaseType;
  paymentFrequency?: PaymentFrequency;
  shortCodePreference?: string;
  mmsEnabled?: boolean;
  freeToEndUser?: boolean;
  chargesApply?: boolean;
  currentProvider?: string;
  migratedMmsEnabled?: boolean;
  migratedLiveTraffic?: boolean;
};

export const setup1Schema: Schema<Setup1> = s.object<Setup1>({
  requestType: s.optional(s.lazy(() => requestTypeSchema)),
  trafficType: s.optional(s.lazy(() => trafficTypeSchema)),
  leaseType: s.optional(s.lazy(() => leaseTypeSchema)),
  paymentFrequency: s.optional(s.lazy(() => paymentFrequencySchema)),
  shortCodePreference: s.optional(s.string()),
  mmsEnabled: s.optional(s.boolean()),
  freeToEndUser: s.optional(s.boolean()),
  chargesApply: s.optional(s.boolean()),
  currentProvider: s.optional(s.string()),
  migratedMmsEnabled: s.optional(s.boolean()),
  migratedLiveTraffic: s.optional(s.boolean()),
  _keysMap: {
    requestType: "request_type",
    trafficType: "traffic_type",
    leaseType: "lease_type",
    paymentFrequency: "payment_frequency",
    shortCodePreference: "short_code_preference",
    mmsEnabled: "mms_enabled",
    freeToEndUser: "free_to_end_user",
    chargesApply: "charges_apply",
    currentProvider: "current_provider",
    migratedMmsEnabled: "migrated_mms_enabled",
    migratedLiveTraffic: "migrated_live_traffic",
  },
});
