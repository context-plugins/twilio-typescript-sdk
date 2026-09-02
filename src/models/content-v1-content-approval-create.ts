import { s, type Schema } from "../core/index.js";

export type ContentV1ContentApprovalCreate = {
  name?: string | null;
  category?: string | null;
  contentType?: string | null;
  status?: string | null;
  rejectionReason?: string | null;
  allowCategoryChange?: boolean | null;
};

export const contentV1ContentApprovalCreateSchema: Schema<ContentV1ContentApprovalCreate> =
  s.object<ContentV1ContentApprovalCreate>({
    name: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.string()),
    contentType: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.string()),
    rejectionReason: s.optionalNullable(s.string()),
    allowCategoryChange: s.optionalNullable(s.boolean()),
    _keysMap: {
      contentType: "content_type",
      rejectionReason: "rejection_reason",
      allowCategoryChange: "allow_category_change",
    },
  });
