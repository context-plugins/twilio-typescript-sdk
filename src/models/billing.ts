import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Billing = {
  recurringBillableItemSid?: string;
  setupBillableItemSid?: string;
};

export const billingSchema: Schema<Billing> = s.object<Billing>({
  recurringBillableItemSid: s.optional(s.string()),
  setupBillableItemSid: s.optional(s.string()),
  _keysMap: {
    recurringBillableItemSid: "RecurringBillableItemSid",
    setupBillableItemSid: "SetupBillableItemSid",
  },
});
