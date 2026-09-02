import { s, type Schema } from "../core/index.js";

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
