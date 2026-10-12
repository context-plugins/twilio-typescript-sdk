import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Content approval request body */
export type ContentApprovalRequest = {
  /** Name of the template. */
  name: string;
  /** A WhatsApp recognized template category. */
  category: string;
};

export const contentApprovalRequestSchema: Schema<ContentApprovalRequest> = s.object<ContentApprovalRequest>({
  name: s.string(),
  category: s.string(),
});
