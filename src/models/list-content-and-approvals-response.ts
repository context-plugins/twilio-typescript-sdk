import { s, type Schema } from "../core/index.js";
import {
  contentV1ContentAndApprovalsSchema,
  type ContentV1ContentAndApprovals,
} from "./content-v1-content-and-approvals.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListContentAndApprovalsResponse = {
  contents?: ContentV1ContentAndApprovals[];
  meta?: Meta;
};

export const listContentAndApprovalsResponseSchema: Schema<ListContentAndApprovalsResponse> =
  s.object<ListContentAndApprovalsResponse>({
    contents: s.optional(s.array(s.lazy(() => contentV1ContentAndApprovalsSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
