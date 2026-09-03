import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV1TollfreeVerificationSchema,
  type MessagingV1TollfreeVerification,
} from "./messaging-v1-tollfree-verification.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListTollfreeVerificationResponse = {
  verifications?: MessagingV1TollfreeVerification[];
  meta?: Meta;
};

export const listTollfreeVerificationResponseSchema: Schema<ListTollfreeVerificationResponse> =
  s.object<ListTollfreeVerificationResponse>({
    verifications: s.optional(s.array(s.lazy(() => messagingV1TollfreeVerificationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
