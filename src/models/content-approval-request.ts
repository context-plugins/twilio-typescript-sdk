import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentApprovalRequest = {
  name: string;
  category: string;
};

export const contentApprovalRequestSchema: Schema<ContentApprovalRequest> = s.object<ContentApprovalRequest>({
  name: s.string(),
  category: s.string(),
});
