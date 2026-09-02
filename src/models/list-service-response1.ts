import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { verifyV2ServiceSchema, type VerifyV2Service } from "./verify-v2-service.js";

export type ListServiceResponse1 = {
  services?: VerifyV2Service[];
  meta?: Meta;
};

export const listServiceResponse1Schema: Schema<ListServiceResponse1> = s.object<ListServiceResponse1>({
  services: s.optional(s.array(s.lazy(() => verifyV2ServiceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
