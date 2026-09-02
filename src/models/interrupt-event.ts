import { s, type Schema } from "../core/index.js";
import { type4Schema, type Type4 } from "./type4.js";

export type InterruptEvent = {
  type?: Type4;
};

export const interruptEventSchema: Schema<InterruptEvent> = s.object<InterruptEvent>({
  type: s.optional(s.lazy(() => type4Schema)),
});
