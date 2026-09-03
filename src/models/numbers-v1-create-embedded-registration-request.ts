import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1CreateEmbeddedRegistrationRequest = {
  regulationId: string;
  regulationVersion: number;
  friendlyName: string;
  statusNotificationEmail?: string;
  statusCallbackUrl?: string | null;
  comments?: string;
  themeSetId?: string;
  data: Record<string, unknown>;
};

export const numbersV1CreateEmbeddedRegistrationRequestSchema: Schema<NumbersV1CreateEmbeddedRegistrationRequest> =
  s.object<NumbersV1CreateEmbeddedRegistrationRequest>({
    regulationId: s.string(),
    regulationVersion: s.number(),
    friendlyName: s.string(),
    statusNotificationEmail: s.optional(s.string()),
    statusCallbackUrl: s.optionalNullable(s.string()),
    comments: s.optional(s.string()),
    themeSetId: s.optional(s.string()),
    data: s.record(s.string(), s.unknown()),
  });
