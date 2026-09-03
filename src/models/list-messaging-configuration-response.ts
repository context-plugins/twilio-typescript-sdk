import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2ServiceMessagingConfigurationSchema,
  type VerifyV2ServiceMessagingConfiguration,
} from "./verify-v2-service-messaging-configuration.js";

export type ListMessagingConfigurationResponse = {
  messagingConfigurations?: VerifyV2ServiceMessagingConfiguration[];
  meta?: Meta;
};

export const listMessagingConfigurationResponseSchema: Schema<ListMessagingConfigurationResponse> =
  s.object<ListMessagingConfigurationResponse>({
    messagingConfigurations: s.optional(s.array(s.lazy(() => verifyV2ServiceMessagingConfigurationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      messagingConfigurations: "messaging_configurations",
    },
  });
