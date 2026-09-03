import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2VerificationTemplateSchema,
  type VerifyV2VerificationTemplate,
} from "./verify-v2-verification-template.js";

export type ListVerificationTemplateResponse = {
  templates?: VerifyV2VerificationTemplate[];
  meta?: Meta;
};

export const listVerificationTemplateResponseSchema: Schema<ListVerificationTemplateResponse> =
  s.object<ListVerificationTemplateResponse>({
    templates: s.optional(s.array(s.lazy(() => verifyV2VerificationTemplateSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
