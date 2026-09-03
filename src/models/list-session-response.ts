import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { proxyV1ServiceSessionSchema, type ProxyV1ServiceSession } from "./proxy-v1-service-session.js";

export type ListSessionResponse = {
  sessions?: ProxyV1ServiceSession[];
  meta?: Meta;
};

export const listSessionResponseSchema: Schema<ListSessionResponse> = s.object<ListSessionResponse>({
  sessions: s.optional(s.array(s.lazy(() => proxyV1ServiceSessionSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
