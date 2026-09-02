import { s, type Schema } from "../core/index.js";
import {
  flexFlowEnumChannelTypeSchema,
  type FlexFlowEnumChannelType,
} from "./flex-flow-enum-channel-type.js";
import {
  flexFlowEnumIntegrationTypeSchema,
  type FlexFlowEnumIntegrationType,
} from "./flex-flow-enum-integration-type.js";

export type FlexV1FlexFlow = {
  accountSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  friendlyName?: string | null;
  chatServiceSid?: string | null;
  channelType?: FlexFlowEnumChannelType;
  contactIdentity?: string | null;
  enabled?: boolean | null;
  integrationType?: FlexFlowEnumIntegrationType;
  integration?: Record<string, unknown> | null;
  longLived?: boolean | null;
  janitorEnabled?: boolean | null;
  url?: string | null;
};

export const flexV1FlexFlowSchema: Schema<FlexV1FlexFlow> = s.object<FlexV1FlexFlow>({
  accountSid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  chatServiceSid: s.optionalNullable(s.string()),
  channelType: s.optional(s.lazy(() => flexFlowEnumChannelTypeSchema)),
  contactIdentity: s.optionalNullable(s.string()),
  enabled: s.optionalNullable(s.boolean()),
  integrationType: s.optional(s.lazy(() => flexFlowEnumIntegrationTypeSchema)),
  integration: s.optionalNullable(s.record(s.string(), s.unknown())),
  longLived: s.optionalNullable(s.boolean()),
  janitorEnabled: s.optionalNullable(s.boolean()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    friendlyName: "friendly_name",
    chatServiceSid: "chat_service_sid",
    channelType: "channel_type",
    contactIdentity: "contact_identity",
    integrationType: "integration_type",
    longLived: "long_lived",
    janitorEnabled: "janitor_enabled",
  },
});
