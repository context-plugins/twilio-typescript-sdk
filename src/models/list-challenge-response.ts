import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2ServiceEntityChallengeSchema,
  type VerifyV2ServiceEntityChallenge,
} from "./verify-v2-service-entity-challenge.js";

export type ListChallengeResponse = {
  challenges?: VerifyV2ServiceEntityChallenge[];
  meta?: Meta;
};

export const listChallengeResponseSchema: Schema<ListChallengeResponse> = s.object<ListChallengeResponse>({
  challenges: s.optional(s.array(s.lazy(() => verifyV2ServiceEntityChallengeSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
