import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2PresignedUrlResponse = {
  expiresAt?: Date;
  fetchUrl?: string;
  uploadUrl?: string;
  uploadFields?: Record<string, unknown>;
};

export const messagingV2PresignedUrlResponseSchema: Schema<MessagingV2PresignedUrlResponse> =
  s.object<MessagingV2PresignedUrlResponse>({
    expiresAt: s.optional(s.dateTime()),
    fetchUrl: s.optional(s.string()),
    uploadUrl: s.optional(s.string()),
    uploadFields: s.optional(s.record(s.string(), s.unknown())),
  });
