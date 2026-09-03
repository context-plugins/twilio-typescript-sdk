import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersV1PortInRequestListMetaSchema,
  type NumbersV1PortInRequestListMeta,
} from "./numbers-v1-port-in-request-list-meta.js";
import {
  numbersV1PortInRequestListSchema,
  type NumbersV1PortInRequestList,
} from "./numbers-v1-port-in-request-list.js";

export type ListPortInRequestsResponse = {
  portInRequests?: NumbersV1PortInRequestList[];
  meta?: NumbersV1PortInRequestListMeta;
};

export const listPortInRequestsResponseSchema: Schema<ListPortInRequestsResponse> =
  s.object<ListPortInRequestsResponse>({
    portInRequests: s.optional(s.array(s.lazy(() => numbersV1PortInRequestListSchema))),
    meta: s.optional(s.lazy(() => numbersV1PortInRequestListMetaSchema)),
    _keysMap: {
      portInRequests: "port_in_requests",
    },
  });
