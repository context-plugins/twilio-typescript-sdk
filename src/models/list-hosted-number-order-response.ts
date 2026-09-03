import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2HostedNumberOrderSchema,
  type NumbersV2HostedNumberOrder,
} from "./numbers-v2-hosted-number-order.js";

export type ListHostedNumberOrderResponse = {
  items?: NumbersV2HostedNumberOrder[];
  meta?: Meta;
};

export const listHostedNumberOrderResponseSchema: Schema<ListHostedNumberOrderResponse> =
  s.object<ListHostedNumberOrderResponse>({
    items: s.optional(s.array(s.lazy(() => numbersV2HostedNumberOrderSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
