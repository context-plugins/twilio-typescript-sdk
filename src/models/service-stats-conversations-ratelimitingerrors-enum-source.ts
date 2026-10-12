import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source via which the request came from. Can be sdk, api. */
export const ServiceStatsConversationsRatelimitingerrorsEnumSource = {
  Sdk: "SDK",
  Api: "API",
} as const;
export type ServiceStatsConversationsRatelimitingerrorsEnumSource =
  | (typeof ServiceStatsConversationsRatelimitingerrorsEnumSource)[keyof typeof ServiceStatsConversationsRatelimitingerrorsEnumSource]
  | (string & {});

export const serviceStatsConversationsRatelimitingerrorsEnumSourceSchema: EnumSchema<ServiceStatsConversationsRatelimitingerrorsEnumSource> =
  s.enumOf<ServiceStatsConversationsRatelimitingerrorsEnumSource>(
    ServiceStatsConversationsRatelimitingerrorsEnumSource,
  );
