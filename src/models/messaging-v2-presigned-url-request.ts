import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2PresignedUrlRequest = {
  /** Base64-encoded MD5 hash of the image */
  imageContentMd5: string;
  /** MIME type of the image (e.g., image/png, image/jpeg) */
  imageContentType: string;
  /** Type of image (logo, hero, etc.) */
  imageKind: string;
  /** Name of the image file */
  imageName: string;
  /** Size of the image in bytes */
  imageSizeBytes: number;
  /** Height of the image in pixels */
  imageHeight?: number;
  /** Width of the image in pixels */
  imageWidth?: number;
};

export const messagingV2PresignedUrlRequestSchema: Schema<MessagingV2PresignedUrlRequest> =
  s.object<MessagingV2PresignedUrlRequest>({
    imageContentMd5: s.string(),
    imageContentType: s.string(),
    imageKind: s.string(),
    imageName: s.string(),
    imageSizeBytes: s.int(),
    imageHeight: s.optional(s.int()),
    imageWidth: s.optional(s.int()),
  });
