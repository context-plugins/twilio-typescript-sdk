import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceEnumGeoMatchLevelSchema,
  type ServiceEnumGeoMatchLevel,
} from "./service-enum-geo-match-level.js";
import {
  serviceEnumNumberSelectionBehaviorSchema,
  type ServiceEnumNumberSelectionBehavior,
} from "./service-enum-number-selection-behavior.js";

export type ProxyV1Service = {
  sid?: string | null;
  uniqueName?: string | null;
  accountSid?: string | null;
  chatInstanceSid?: string | null;
  callbackUrl?: string | null;
  defaultTtl?: number;
  numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
  geoMatchLevel?: ServiceEnumGeoMatchLevel;
  interceptCallbackUrl?: string | null;
  outOfSessionCallbackUrl?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSchema: Schema<ProxyV1Service> = s.object<ProxyV1Service>({
  sid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  chatInstanceSid: s.optionalNullable(s.string()),
  callbackUrl: s.optionalNullable(s.string()),
  defaultTtl: s.optional(s.number()),
  numberSelectionBehavior: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
  geoMatchLevel: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
  interceptCallbackUrl: s.optionalNullable(s.string()),
  outOfSessionCallbackUrl: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    uniqueName: "unique_name",
    accountSid: "account_sid",
    chatInstanceSid: "chat_instance_sid",
    callbackUrl: "callback_url",
    defaultTtl: "default_ttl",
    numberSelectionBehavior: "number_selection_behavior",
    geoMatchLevel: "geo_match_level",
    interceptCallbackUrl: "intercept_callback_url",
    outOfSessionCallbackUrl: "out_of_session_callback_url",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
