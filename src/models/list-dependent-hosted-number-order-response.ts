import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2AuthorizationDocumentDependentHostedNumberOrderSchema,
  type NumbersV2AuthorizationDocumentDependentHostedNumberOrder,
} from "./numbers-v2-authorization-document-dependent-hosted-number-order.js";

export type ListDependentHostedNumberOrderResponse = {
  items?: NumbersV2AuthorizationDocumentDependentHostedNumberOrder[];
  meta?: Meta;
};

export const listDependentHostedNumberOrderResponseSchema: Schema<ListDependentHostedNumberOrderResponse> =
  s.object<ListDependentHostedNumberOrderResponse>({
    items: s.optional(s.array(s.lazy(() => numbersV2AuthorizationDocumentDependentHostedNumberOrderSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
