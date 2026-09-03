import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ConfigurationAddressSchema,
  type ConversationsV1ConfigurationAddress,
} from "./conversations-v1-configuration-address.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConfigurationAddressResponse = {
  addressConfigurations?: ConversationsV1ConfigurationAddress[];
  meta?: Meta;
};

export const listConfigurationAddressResponseSchema: Schema<ListConfigurationAddressResponse> =
  s.object<ListConfigurationAddressResponse>({
    addressConfigurations: s.optional(s.array(s.lazy(() => conversationsV1ConfigurationAddressSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      addressConfigurations: "address_configurations",
    },
  });
