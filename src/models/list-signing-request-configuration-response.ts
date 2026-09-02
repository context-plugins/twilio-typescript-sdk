import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV1SigningRequestConfigurationSchema,
  type NumbersV1SigningRequestConfiguration,
} from "./numbers-v1-signing-request-configuration.js";

export type ListSigningRequestConfigurationResponse = {
  configurations?: NumbersV1SigningRequestConfiguration[];
  meta?: Meta;
};

export const listSigningRequestConfigurationResponseSchema: Schema<ListSigningRequestConfigurationResponse> =
  s.object<ListSigningRequestConfigurationResponse>({
    configurations: s.optional(s.array(s.lazy(() => numbersV1SigningRequestConfigurationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
