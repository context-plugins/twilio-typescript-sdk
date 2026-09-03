import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2ConfigurationSchema,
  type ConversationsV2Configuration,
} from "./conversations-v2-configuration.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

export type V2ControlPlaneConfigurationsResponse = {
  configurations: ConversationsV2Configuration[];
  meta: Meta1;
};

export const v2ControlPlaneConfigurationsResponseSchema: Schema<V2ControlPlaneConfigurationsResponse> =
  s.object<V2ControlPlaneConfigurationsResponse>({
    configurations: s.array(s.lazy(() => conversationsV2ConfigurationSchema)),
    meta: meta1Schema,
  });
