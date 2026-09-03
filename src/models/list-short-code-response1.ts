import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV1ServiceShortCodeSchema,
  type MessagingV1ServiceShortCode,
} from "./messaging-v1-service-short-code.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListShortCodeResponse1 = {
  shortCodes?: MessagingV1ServiceShortCode[];
  meta?: Meta;
};

export const listShortCodeResponse1Schema: Schema<ListShortCodeResponse1> = s.object<ListShortCodeResponse1>({
  shortCodes: s.optional(s.array(s.lazy(() => messagingV1ServiceShortCodeSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    shortCodes: "short_codes",
  },
});
