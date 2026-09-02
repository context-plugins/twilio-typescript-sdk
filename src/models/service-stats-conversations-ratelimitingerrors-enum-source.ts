import { s, type EnumSchema } from "../core/index.js";

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
