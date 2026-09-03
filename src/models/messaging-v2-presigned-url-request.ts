import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2PresignedUrlRequest = {
  imageContentMd5: string;
  imageContentType: string;
  imageKind: string;
  imageName: string;
  imageSizeBytes: number;
  imageHeight?: number;
  imageWidth?: number;
};

export const messagingV2PresignedUrlRequestSchema: Schema<MessagingV2PresignedUrlRequest> =
  s.object<MessagingV2PresignedUrlRequest>({
    imageContentMd5: s.string(),
    imageContentType: s.string(),
    imageKind: s.string(),
    imageName: s.string(),
    imageSizeBytes: s.number(),
    imageHeight: s.optional(s.number()),
    imageWidth: s.optional(s.number()),
  });
