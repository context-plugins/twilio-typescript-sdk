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
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the trigger
   * monitors.
   */
  accountSid?: string | null;
  /** The API version used to create the resource. */
  apiVersion?: string | null;
  /** The HTTP method we use to call `callback_url`. Can be: `GET` or `POST`. */
  callbackMethod?: CallbackMethod | null;
  /** The URL we call using the `callback_method` when the trigger fires. */
  callbackUrl?: string | null;
  /** The current value of the field the trigger is watching. */
  currentValue?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the trigger was last fired specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateFired?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The string that you assigned to describe the trigger. */
  friendlyName?: string | null;
  /**
   * The frequency of a recurring UsageTrigger. Can be: `daily`, `monthly`, or `yearly` for
   * recurring triggers or empty for non-recurring triggers. A trigger will only fire once during
   * each period. Recurring times are in GMT.
   */
  recurring?: UsageTriggerEnumRecurring;
  /** The unique string that that we created to identify the UsageTrigger resource. */
  sid?: string | null;
  /**
   * The field in the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource
   * that fires the trigger. Can be: `count`, `usage`, or `price`, as described in the [UsageRecords
   * documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
   */
  triggerBy?: UsageTriggerEnumTriggerField;
  /** The value at which the trigger will fire. Must be a positive, numeric value. */
  triggerValue?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * The usage category the trigger watches. Must be one of the supported [usage
   * categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
   */
  usageCategory?: string | null;
  /**
   * The URI of the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource this
   * trigger watches, relative to `https://api.twilio.com`.
   */
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
