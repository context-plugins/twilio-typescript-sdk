import { s, type Schema } from "../core/index.js";
import { lookupRequestWithCorIdSchema, type LookupRequestWithCorId } from "./lookup-request-with-cor-id.js";

export type LookupRequest = {
  phoneNumbers?: LookupRequestWithCorId[];
};

export const lookupRequestSchema: Schema<LookupRequest> = s.object<LookupRequest>({
  phoneNumbers: s.optional(s.array(s.lazy(() => lookupRequestWithCorIdSchema))),
  _keysMap: {
    phoneNumbers: "phone_numbers",
  },
});
