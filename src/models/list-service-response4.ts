import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { syncV1ServiceSchema, type SyncV1Service } from "./sync-v1-service.js";

export type ListServiceResponse4 = {
  services?: SyncV1Service[];
  meta?: Meta;
};

export const listServiceResponse4Schema: Schema<ListServiceResponse4> = s.object<ListServiceResponse4>({
  services: s.optional(s.array(s.lazy(() => syncV1ServiceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
