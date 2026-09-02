import { s, type Schema } from "../core/index.js";

export type ContentApprovalRequest = {
  name: string;
  category: string;
};

export const contentApprovalRequestSchema: Schema<ContentApprovalRequest> = s.object<ContentApprovalRequest>({
  name: s.string(),
  category: s.string(),
});
