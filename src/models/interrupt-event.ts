import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type InterruptEvent = {
  type?: Type4;
};

export const interruptEventSchema: Schema<InterruptEvent> = s.object<InterruptEvent>({
  type: s.optional(s.lazy(() => type4Schema)),
});
