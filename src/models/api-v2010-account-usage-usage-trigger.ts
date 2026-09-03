import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackMethodSchema, type CallbackMethod } from "./callback-method.js";
import {
  usageTriggerEnumRecurringSchema,
  type UsageTriggerEnumRecurring,
} from "./usage-trigger-enum-recurring.js";
import {
  usageTriggerEnumTriggerFieldSchema,
  type UsageTriggerEnumTriggerField,
} from "./usage-trigger-enum-trigger-field.js";

export type ApiV2010AccountUsageUsageTrigger = {
  accountSid?: string | null;
  apiVersion?: string | null;
  callbackMethod?: CallbackMethod | null;
  callbackUrl?: string | null;
  currentValue?: string | null;
  dateCreated?: string | null;
  dateFired?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  recurring?: UsageTriggerEnumRecurring;
  sid?: string | null;
  triggerBy?: UsageTriggerEnumTriggerField;
  triggerValue?: string | null;
  uri?: string | null;
  usageCategory?: string | null;
  usageRecordUri?: string | null;
};

export const apiV2010AccountUsageUsageTriggerSchema: Schema<ApiV2010AccountUsageUsageTrigger> =
  s.object<ApiV2010AccountUsageUsageTrigger>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    callbackMethod: s.optionalNullable(s.lazy(() => callbackMethodSchema)),
    callbackUrl: s.optionalNullable(s.string()),
    currentValue: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateFired: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    recurring: s.optional(s.lazy(() => usageTriggerEnumRecurringSchema)),
    sid: s.optionalNullable(s.string()),
    triggerBy: s.optional(s.lazy(() => usageTriggerEnumTriggerFieldSchema)),
    triggerValue: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    usageCategory: s.optionalNullable(s.string()),
    usageRecordUri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      callbackMethod: "callback_method",
      callbackUrl: "callback_url",
      currentValue: "current_value",
      dateCreated: "date_created",
      dateFired: "date_fired",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      triggerBy: "trigger_by",
      triggerValue: "trigger_value",
      usageCategory: "usage_category",
      usageRecordUri: "usage_record_uri",
    },
  });
