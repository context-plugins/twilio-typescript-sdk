import { s, type Schema } from "../core/index.js";
import {
  serviceBindingEnumBindingTypeSchema,
  type ServiceBindingEnumBindingType,
} from "./service-binding-enum-binding-type.js";

export type ConversationsV1ServiceServiceBinding = {
  sid?: string | null;
  accountSid?: string | null;
  chatServiceSid?: string | null;
  credentialSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  endpoint?: string | null;
  identity?: string | null;
  bindingType?: ServiceBindingEnumBindingType;
  messageTypes?: string[] | null;
  url?: string | null;
};

export const conversationsV1ServiceServiceBindingSchema: Schema<ConversationsV1ServiceServiceBinding> =
  s.object<ConversationsV1ServiceServiceBinding>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    credentialSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    endpoint: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    bindingType: s.optional(s.lazy(() => serviceBindingEnumBindingTypeSchema)),
    messageTypes: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      credentialSid: "credential_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      bindingType: "binding_type",
      messageTypes: "message_types",
    },
  });
