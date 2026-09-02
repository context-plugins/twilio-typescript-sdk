import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { proxyV1ServiceSchema, type ProxyV1Service } from "./proxy-v1-service.js";

export type ListServiceResponse3 = {
  services?: ProxyV1Service[];
  meta?: Meta;
};

export const listServiceResponse3Schema: Schema<ListServiceResponse3> = s.object<ListServiceResponse3>({
  services: s.optional(s.array(s.lazy(() => proxyV1ServiceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
