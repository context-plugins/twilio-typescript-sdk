import { s, type Schema } from "../core/index.js";
import { numbersV2AddressSchema, type NumbersV2Address } from "./numbers-v2-address.js";
import { pagingSchema, type Paging } from "./paging.js";

export type NumbersV2AddressList = {
  addresses?: NumbersV2Address[];
  paging?: Paging;
};

export const numbersV2AddressListSchema: Schema<NumbersV2AddressList> = s.object<NumbersV2AddressList>({
  addresses: s.optional(s.array(s.lazy(() => numbersV2AddressSchema))),
  paging: s.optional(s.lazy(() => pagingSchema)),
});
