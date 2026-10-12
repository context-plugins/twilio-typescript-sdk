import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexFlowEnumChannelTypeSchema,
  type FlexFlowEnumChannelType,
} from "./flex-flow-enum-channel-type.js";
import {
  flexFlowEnumIntegrationTypeSchema,
  type FlexFlowEnumIntegrationType,
} from "./flex-flow-enum-integration-type.js";

export type FlexV1FlexFlow = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Flow resource and owns this Workflow.
   */
  accountSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The unique string that we created to identify the Flex Flow resource. */
  sid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /** The SID of the chat service. */
  chatServiceSid?: string | null;
  /**
   * The channel type. One of `web`, `facebook`, `sms`, `whatsapp`, `line` or `custom`. By default,
   * Studio’s Send to Flex widget passes it on to the Task attributes for Tasks created based on
   * this Flex Flow. The Task attributes will be used by the Flex UI to render the respective Task
   * as appropriate (applying channel-specific design and length limits). If `channelType` is
   * `facebook`, `whatsapp` or `line`, the Send to Flex widget should set the Task Channel to
   * Programmable Chat.
   */
  channelType?: FlexFlowEnumChannelType;
  /** The channel contact's Identity. */
  contactIdentity?: string | null;
  /** Whether the Flex Flow is enabled. */
  enabled?: boolean | null;
  /**
   * The software that will handle inbound messages. [Integration
   * Type](https://www.twilio.com/docs/flex/developer/messaging/manage-flows#integration-types) can
   * be: `studio`, `external`, or `task`.
   */
  integrationType?: FlexFlowEnumIntegrationType;
  /** An object that contains specific parameters for the integration. */
  integration?: Record<string, unknown> | null;
  /**
   * When enabled, Flex will keep the chat channel active so that it may be used for subsequent
   * interactions with a contact identity. Defaults to `false`.
   */
  longLived?: boolean | null;
  /**
   * When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated
   * Task is deleted outside of the Flex UI. Defaults to `false`.
   */
  janitorEnabled?: boolean | null;
  /** The absolute URL of the Flex Flow resource. */
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
