import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupBatchResponseSchema, type LookupBatchResponse } from "./lookup-batch-response.js";

export type LookupResponse1 = {
  phoneNumbers?: LookupBatchResponse[];
};

export const lookupResponse1Schema: Schema<LookupResponse1> = s.object<LookupResponse1>({
  phoneNumbers: s.optional(s.array(s.lazy(() => lookupBatchResponseSchema))),
  _keysMap: {
    phoneNumbers: "phone_numbers",
  },
});
